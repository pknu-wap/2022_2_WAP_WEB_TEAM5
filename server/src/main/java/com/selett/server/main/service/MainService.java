package com.selett.server.main.service;

import com.selett.server.main.dto.CoverLetter;
import com.selett.server.main.dto.FolderList;
import com.selett.server.main.dto.MainResponse;
import com.selett.server.main.dto.create.CreateCoverLetterResponse;
import com.selett.server.main.dto.create.CreateListResponse;
import com.selett.server.main.dto.update.UpdateCoverLetterRequest;
import com.selett.server.main.dto.update.UpdateListRequest;
import com.selett.server.main.dto.update.UpdatePositionCoverLetterRequest;
import com.selett.server.main.dto.update.UpdatePositionListRequest;
import com.selett.server.mapper.CoverLetterEntity;
import com.selett.server.mapper.ListEntity;
import com.selett.server.repository.CoverLetterRepository;
import com.selett.server.repository.ListRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@AllArgsConstructor
public class MainService {
    private final ListRepository listRepository;
    private final CoverLetterRepository coverLetterRepository;

    private CreateListResponse getListResponse(ListEntity newListEntity, CreateCoverLetterResponse coverLetter) {
        List<CoverLetter> coverLetters = new ArrayList<>();
        coverLetters.add(coverLetter.getCoverLetter());
        FolderList newList = new FolderList(newListEntity, coverLetters);

        CreateListResponse createListResponse = new CreateListResponse();
        createListResponse.setList(newList);

        return createListResponse;
    }

    private CreateCoverLetterResponse getCoverLetterResponse(Integer prevId, CoverLetter coverLetter) {
        CreateCoverLetterResponse createCoverLetterResponse = new CreateCoverLetterResponse();
        createCoverLetterResponse.setPrevId(prevId);
        createCoverLetterResponse.setCoverLetter(coverLetter);

        return createCoverLetterResponse;
    }

    private void setCoverLetterNext(Integer id, Integer to) {
        if(id != 0) {
            Optional<CoverLetterEntity> coverLetterEntity = coverLetterRepository.findById(id);
            coverLetterEntity.get().setNext(to);
            coverLetterRepository.save(coverLetterEntity.get());
        }
    }

    private void setCoverLetterPrev(Integer id, Integer to) {
        if(id != 0) {
            Optional<CoverLetterEntity> coverLetterEntity = coverLetterRepository.findById(id);
            coverLetterEntity.get().setPrev(to);
            coverLetterRepository.save(coverLetterEntity.get());
        }
    }

    private void setListNext(Integer id, Integer to) {
        if(id != 0) {
            ListEntity listEntity = listRepository.findByListId(id);
            listEntity.setNext(to);
            listRepository.save(listEntity);
        }
    }

    private void setListPrev(Integer id, Integer to) {
        if(id != 0) {
            ListEntity listEntity = listRepository.findByListId(id);
            listEntity.setPrev(to);
            listRepository.save(listEntity);
        }
    }

    public MainResponse getListAndCoverLetter(Integer userId) {
        MainResponse response = new MainResponse(new ArrayList<>());

        List<ListEntity> listEntities = listRepository.findAllByUserId(userId);

        if(listEntities.isEmpty())
            return response;

        Map<Integer, ListEntity> listEntityMap = new HashMap<>();
        ListEntity nowList = new ListEntity();
        for(ListEntity listEntity : listEntities) {
            listEntityMap.put(listEntity.getListId(), listEntity);

            if(listEntity.getPrev() == 0)
                nowList = listEntity;
        }

        List<FolderList> folderLists = new ArrayList<>();

        while(true) {
            List<CoverLetter> coverLetters = new ArrayList<>();
            List<CoverLetterEntity> coverLetterEntities = coverLetterRepository.findAllByListId(nowList.getListId());

            // 필수적으로 하나는 있는 상태이므로 없음을 검사하지 않음

            Map<Integer, CoverLetterEntity> coverLetterEntityMap = new HashMap<>();
            CoverLetterEntity nowCoverLetter = new CoverLetterEntity();
            for(CoverLetterEntity coverLetterEntity : coverLetterEntities) {
                coverLetterEntityMap.put(coverLetterEntity.getId(), coverLetterEntity);

                if(coverLetterEntity.getPrev() == 0)
                    nowCoverLetter = coverLetterEntity;
            }

            while(true) {
                coverLetters.add(new CoverLetter(nowCoverLetter));

                if(nowCoverLetter.getNext() == 0)
                    break;

                nowCoverLetter = coverLetterEntityMap.get(nowCoverLetter.getNext());
            }

            FolderList nowFolder = new FolderList(nowList, coverLetters);
            folderLists.add(nowFolder);

            if(nowList.getNext() == 0)
                break;

            nowList = listEntityMap.get(nowList.getNext());
        }

        response.setList(folderLists);

        return response;
    }

    public boolean existListTitle(Integer userId, String title) {
        return listRepository.existsByUserIdAndTitle(userId, title);
    }

    public boolean existCoverLetterTitle(Integer ListId, String title) {
        return coverLetterRepository.existsByListIdAndTitle(ListId, title);
    }

    public boolean existList(Integer listId) {
        return listRepository.existsByListId(listId);
    }

    public boolean existCoverLetter(Integer id) {
        return coverLetterRepository.existsById(id);
    }

    public CreateListResponse createList(Integer userId, String title) {
        ListEntity newListEntity = new ListEntity();
        newListEntity.setTitle(title);
        newListEntity.setPrev(0);
        newListEntity.setNext(0);
        newListEntity.setUserId(userId);

        if(listRepository.countByUserId(userId) == 0) {
            newListEntity = listRepository.save(newListEntity);

            CreateCoverLetterResponse createCoverLetterResponse = createCoverLetter(newListEntity.getListId(), "새 자기소개서");

            return getListResponse(newListEntity, createCoverLetterResponse);
        }

        ListEntity lastListEntity = listRepository.findByUserIdAndNext(userId, 0);

        newListEntity.setPrev(lastListEntity.getListId());
        newListEntity = listRepository.save(newListEntity);

        lastListEntity.setNext(newListEntity.getListId());
        listRepository.save(lastListEntity);

        CreateCoverLetterResponse createCoverLetterResponse = createCoverLetter(newListEntity.getListId(), "새 자기소개서");

        return getListResponse(newListEntity, createCoverLetterResponse);
    }

    public CreateCoverLetterResponse createCoverLetter(Integer listId, String title) {
        CoverLetterEntity newCoverLetterEntity = new CoverLetterEntity();
        newCoverLetterEntity.setTitle(title);
        newCoverLetterEntity.setQuestionLock(false);
        newCoverLetterEntity.setDescriptionLock(false);
        newCoverLetterEntity.setPrev(0);
        newCoverLetterEntity.setNext(0);
        newCoverLetterEntity.setListId(listId);

        if(coverLetterRepository.countByListId(listId) == 0) {
            coverLetterRepository.saveAndFlush(newCoverLetterEntity);

            CreateCoverLetterResponse createCoverLetterResponse = new CreateCoverLetterResponse();
            createCoverLetterResponse.setPrevId(newCoverLetterEntity.getPrev());
            createCoverLetterResponse.setCoverLetter(new CoverLetter(newCoverLetterEntity));

            return getCoverLetterResponse(newCoverLetterEntity.getPrev(), new CoverLetter(newCoverLetterEntity));
        }

        CoverLetterEntity lastCoverLetterEntity = coverLetterRepository.findByListIdAndNext(listId, 0);

        newCoverLetterEntity.setPrev(lastCoverLetterEntity.getId());
        newCoverLetterEntity = coverLetterRepository.save(newCoverLetterEntity);

        lastCoverLetterEntity.setNext(newCoverLetterEntity.getId());
        coverLetterRepository.saveAndFlush(lastCoverLetterEntity);

        return getCoverLetterResponse(newCoverLetterEntity.getPrev(), new CoverLetter(newCoverLetterEntity));
    }

    public void deleteList(Integer listId) {
        ListEntity deleteListEntity = listRepository.findByListId(listId);

        Integer prevId = deleteListEntity.getPrev();
        Integer nextId = deleteListEntity.getNext();

        setListNext(prevId, nextId);
        setListPrev(nextId, prevId);

        listRepository.deleteById(listId);
        listRepository.flush();
    }

    public void deleteCoverLetter(Integer id) {
        Optional<CoverLetterEntity> deleteCoverLetterEntity = coverLetterRepository.findById(id);

        Integer prevId = deleteCoverLetterEntity.get().getPrev();
        Integer nextId = deleteCoverLetterEntity.get().getNext();

        setCoverLetterNext(prevId, nextId);
        setCoverLetterPrev(nextId, prevId);

        coverLetterRepository.deleteById(id);
        coverLetterRepository.flush();
    }

    public void updateList(UpdateListRequest updateListRequest) {
        Integer listId = updateListRequest.getListId();

        ListEntity updateListEntity = listRepository.findByListId(listId);

        if(updateListRequest.getTitle() != null) {
            updateListEntity.setTitle(updateListRequest.getTitle());
        }

        listRepository.saveAndFlush(updateListEntity);
    }
    public void updateCoverLetter(UpdateCoverLetterRequest updateCoverLetterRequest) {
        Integer id = updateCoverLetterRequest.getId();

        Optional<CoverLetterEntity> updateCoverLetterEntity = coverLetterRepository.findById(id);

        if(updateCoverLetterRequest.getTitle() != null) {
            updateCoverLetterEntity.get().setTitle(updateCoverLetterRequest.getTitle());
        }
        if(updateCoverLetterRequest.getQuestion() != null) {
            updateCoverLetterEntity.get().setQuestion(updateCoverLetterRequest.getQuestion());
        }
        if(updateCoverLetterRequest.getQuestionLock() != null) {
            updateCoverLetterEntity.get().setQuestionLock(updateCoverLetterRequest.getQuestionLock());
        }
        if(updateCoverLetterRequest.getDescription() != null) {
            updateCoverLetterEntity.get().setDescription(updateCoverLetterRequest.getDescription());
        }
        if(updateCoverLetterRequest.getDescriptionLock() != null) {
            updateCoverLetterEntity.get().setDescriptionLock(updateCoverLetterRequest.getDescriptionLock());
        }

        coverLetterRepository.saveAndFlush(updateCoverLetterEntity.get());
    }

    public void updatePositionList(UpdatePositionListRequest updatePositionListRequest) {
        Integer listId = updatePositionListRequest.getListId();

        ListEntity updateListEntity = listRepository.findByListId(listId);

        Integer currentPrevListId = updateListEntity.getPrev();
        Integer currentNextListId = updateListEntity.getNext();

        setListPrev(currentNextListId, currentPrevListId);
        setListNext(currentPrevListId, currentNextListId);

        Integer toMovePrevListId = updatePositionListRequest.getToMovePrevListId();
        Integer toMoveNextListId = updatePositionListRequest.getToMoveNextListId();

        setListPrev(toMoveNextListId, listId);
        setListNext(toMovePrevListId, listId);

        updateListEntity.setPrev(toMovePrevListId);
        updateListEntity.setNext(toMoveNextListId);

        listRepository.flush();
    }

    public void updatePositionCoverLetter(UpdatePositionCoverLetterRequest updatePositionCoverLetterRequest) {
        Integer id = updatePositionCoverLetterRequest.getId();

        Optional<CoverLetterEntity> updateCoverLetterEntity = coverLetterRepository.findById(id);

        Integer currentPrevId = updateCoverLetterEntity.get().getPrev();
        Integer currentNextId = updateCoverLetterEntity.get().getNext();

        setCoverLetterPrev(currentNextId, currentPrevId);
        setCoverLetterNext(currentPrevId, currentNextId);

        Integer toMovePrevId = updatePositionCoverLetterRequest.getToMovePrevId();
        Integer toMoveNextId = updatePositionCoverLetterRequest.getToMoveNextId();

        setCoverLetterPrev(toMoveNextId, id);
        setCoverLetterNext(toMovePrevId, id);

        updateCoverLetterEntity.get().setPrev(toMovePrevId);
        updateCoverLetterEntity.get().setNext(toMoveNextId);

        coverLetterRepository.flush();
    }
}
