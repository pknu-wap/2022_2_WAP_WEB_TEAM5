package com.selett.server.utils;

import com.selett.server.jpa.mapper.*;
import com.selett.server.jpa.repository.*;
import com.selett.server.security.JwtTokenProvider;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Objects;

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
    private final String errorMsgNotFoundId = "찾을 수 없는 아이디입니다.";
    private final String errorMsgWrongInfo = "로그인한 유저 정보와 요청한 정보가 다릅니다.";

    public void verify(String token, Integer userId) {
        UserInfoEntity user = userInfoRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException(errorMsgNotFoundId));

        if (!Objects.equals(user.getIdentification(), jwtTokenProvider.getUserPk(token))) {
            throw new IllegalArgumentException(errorMsgWrongInfo);
        }
    }

    public void verifyList(String token, Integer listId) {
        ListEntity list = listRepository.findById(listId)
                .orElseThrow(() -> new IllegalArgumentException(errorMsgNotFoundId));

        verify(token, list.getUserId());
    }

    public void verifyCoverLetter(String token, Integer id) {
        CoverLetterEntity coverLetter = coverLetterRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException(errorMsgNotFoundId));

        verifyList(token, coverLetter.getListId());
    }

    public void verifyAward(String token, Integer id) {
        AwardEntity award = awardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException(errorMsgNotFoundId));

        verify(token, award.getUserId());
    }

    public void verifyEducation(String token, Integer id) {
        EducationEntity education = educationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException(errorMsgNotFoundId));

        verify(token, education.getUserId());
    }

    public void verifyLanguageSkill(String token, Integer id) {
        LanguageSkillEntity languageSkill = languageSkillRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException(errorMsgNotFoundId));

        verify(token, languageSkill.getUserId());
    }

    public void verifyMemo(String token, Integer id) {
        MemoEntity memo = memoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException(errorMsgNotFoundId));

        verify(token, memo.getUserId());
    }

    public void verifyLicense(String token, Integer id) {
        LicenseEntity license = licenseRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException(errorMsgNotFoundId));

        verify(token, license.getUserId());
    }
}
