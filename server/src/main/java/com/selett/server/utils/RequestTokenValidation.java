package com.selett.server.utils;

import com.selett.server.jpa.mapper.*;
import com.selett.server.jpa.repository.*;
import com.selett.server.security.JwtTokenProvider;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.Optional;

@RequiredArgsConstructor
@Builder
@Component
public class RequestTokenValidation {
    private final JwtTokenProvider jwtTokenProvider;
    private final UserInfoRepository userInfoRepository;
    private final ListRepository listRepository;
    private final CoverLetterRepository coverLetterRepository;
    private final AwardRepository awardRepository;
    private final EducationRepository educationRepository;
    private final LanguageSkillRepository languageSkillRepository;
    private final MemoRepository memoRepository;
    private final LicenseRepository licenseRepository;

    public boolean verify(String token, Integer userId) {
        Optional<UserInfoEntity> user = userInfoRepository.findById(userId);

        if(user.isEmpty()) {
            return false;
        }

        return Objects.equals(user.get().getIdentification(), jwtTokenProvider.getUserPk(token));
    }

    public boolean verifyList(String token, Integer listId) {
        Optional<ListEntity> list = listRepository.findById(listId);

        if(list.isEmpty()) {
            return false;
        }

        return verify(token, list.get().getUserId());
    }

    public boolean verifyCoverLetter(String token, Integer id) {
        Optional<CoverLetterEntity> coverLetter = coverLetterRepository.findById(id);

        if(coverLetter.isEmpty()) {
            return false;
        }

        return verifyList(token, coverLetter.get().getListId());
    }

    public boolean verifyAward(String token, Integer id) {
        Optional<AwardEntity> award = awardRepository.findById(id);

        if(award.isEmpty()) {
            return false;
        }

        return verify(token, award.get().getUserId());
    }

    public boolean verifyEducation(String token, Integer id) {
        Optional<EducationEntity> education = educationRepository.findById(id);

        if(education.isEmpty()) {
            return false;
        }

        return verify(token, education.get().getUserId());
    }

    public boolean verifyLanguageSkill(String token, Integer id) {
        Optional<LanguageSkillEntity> languageSkill = languageSkillRepository.findById(id);

        if(languageSkill.isEmpty()) {
            return false;
        }

        return verify(token, languageSkill.get().getUserId());
    }

    public boolean verifyMemo(String token, Integer id) {
        Optional<MemoEntity> memo = memoRepository.findById(id);

        if(memo.isEmpty()) {
            return false;
        }

        return verify(token, memo.get().getUserId());
    }

    public boolean verifyLicense(String token, Integer id) {
        Optional<LicenseEntity> license = licenseRepository.findById(id);

        if(license.isEmpty()) {
            return false;
        }

        return verify(token, license.get().getUserId());
    }
}
