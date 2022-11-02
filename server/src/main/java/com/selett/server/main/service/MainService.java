package com.selett.server.main.service;

import com.selett.server.main.dto.CoverLetter;
import com.selett.server.main.dto.FolderList;
import com.selett.server.main.dto.MainResponse;
import com.selett.server.mapper.ListEntity;
import com.selett.server.repository.CoverLetterRepository;
import com.selett.server.repository.ListRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class MainService {
    private final ListRepository listRepository;
    private final CoverLetterRepository coverLetterRepository;

    public MainResponse getListAndCoverLetter(Integer userId) {
        MainResponse response = new MainResponse(new ArrayList<>());

        List<ListEntity> listEntities = listRepository.findAllByUserIdOrderByPositionAsc(userId);
        for(ListEntity listEntity : listEntities) {
            FolderList folderList = new FolderList();

            folderList.setListId(listEntity.getListId());
            folderList.setTitle(listEntity.getTitle());
            List<CoverLetter> coverLetters = new ArrayList<>();
            coverLetterRepository.findAllByListIdOrderByPositionAsc(listEntity.getListId()).forEach(coverLetterEntity -> {
                CoverLetter coverLetter = new CoverLetter();
                coverLetter.setId(coverLetterEntity.getId());
                coverLetter.setTitle(coverLetterEntity.getTitle());
                coverLetter.setQuestion(coverLetterEntity.getQuestion());
                coverLetter.setQuestionLock(coverLetterEntity.getQuestionLock());
                coverLetter.setDescription(coverLetterEntity.getDescription());
                coverLetter.setDescriptionLock(coverLetterEntity.getDescriptionLock());

                coverLetters.add(coverLetter);
            });

            folderList.setCoverLetter(coverLetters);

            response.getList().add(folderList);
        }

        return response;
    }
}
