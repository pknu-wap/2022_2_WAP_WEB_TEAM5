package com.selett.server.main.service;

import com.selett.server.main.dto.*;
import com.selett.server.main.dto.create.CreateCoverLetterResponse;
import com.selett.server.main.dto.create.CreateListResponse;
import com.selett.server.mapper.CoverLetterEntity;
import com.selett.server.mapper.ListEntity;
import com.selett.server.repository.CoverLetterRepository;
import com.selett.server.repository.ListRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class MainService {
    private final ListRepository listRepository;
    private final CoverLetterRepository coverLetterRepository;

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

    private CreateListResponse getListResponse(ListEntity newListEntity, CreateCoverLetterResponse coverLetter) {
        List<CoverLetter> coverLetters = new ArrayList<>();
        coverLetters.add(coverLetter.getCoverLetter());
        FolderList newList = new FolderList(newListEntity, coverLetters);

        CreateListResponse createListResponse = new CreateListResponse();
        createListResponse.setList(newList);

        return createListResponse;
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

    private CreateCoverLetterResponse getCoverLetterResponse(Integer prevId, CoverLetter coverLetter) {
        CreateCoverLetterResponse createCoverLetterResponse = new CreateCoverLetterResponse();
        createCoverLetterResponse.setPrevId(prevId);
        createCoverLetterResponse.setCoverLetter(coverLetter);

        return createCoverLetterResponse;
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
}
