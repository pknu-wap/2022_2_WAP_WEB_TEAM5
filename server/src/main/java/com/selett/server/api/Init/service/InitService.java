package com.selett.server.api.Init.service;

import com.selett.server.jpa.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class InitService {
    private final AwardRepository awardRepository;
    private final LanguageSkillRepository languageSkillRepository;
    private final LicenseRepository licenseRepository;
    private final MemoRepository memoRepository;
    private final EducationRepository educationRepository;
    private final CoverLetterRepository coverLetterRepository;
    private final ListRepository listRepository;

    public void init() {
        awardRepository.deleteAll();
        awardRepository.flush();
        languageSkillRepository.deleteAll();
        languageSkillRepository.flush();
        licenseRepository.deleteAll();
        licenseRepository.flush();
        memoRepository.deleteAll();
        memoRepository.flush();
        educationRepository.deleteAll();
        educationRepository.flush();
        coverLetterRepository.findAll().forEach(coverLetterEntity -> {
            coverLetterEntity.setPrev(null);
            coverLetterEntity.setNext(null);
            coverLetterRepository.saveAndFlush(coverLetterEntity);
        });
        coverLetterRepository.deleteAll();
        coverLetterRepository.flush();
        listRepository.findAll().forEach(listEntity -> {
            listEntity.setPrev(null);
            listEntity.setNext(null);
            listRepository.saveAndFlush(listEntity);
        });
        listRepository.deleteAll();
        listRepository.flush();
    }
}
