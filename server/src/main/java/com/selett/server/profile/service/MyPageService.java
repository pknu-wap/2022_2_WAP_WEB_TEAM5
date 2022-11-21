package com.selett.server.profile.service;

import com.selett.server.mapper.*;
import com.selett.server.profile.dto.*;
import com.selett.server.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor

public class MyPageService {
    private final AwardRepository awardRepository;
    private final EducationRepository educationRepository;
    private final LicenseRepository licenseRepository;
    private final MemoRepository memoRepository;
    private final LanguageSkillRepository languageSkillRepository;

    public MyPageResponse getProfile(Integer userId) {
        MyPageResponse myPageResponse = new MyPageResponse();

        //award
        List<AwardEntity> awards = awardRepository.findAllByUserId(userId);
        List<Award> awardResponse = new ArrayList<>();

        for (AwardEntity award : awards) {
            Award awardInput = new Award();
            awardInput.setId(award.getId());
            awardInput.setTitle(award.getTitle());
            awardInput.setDate(award.getDate());
            awardInput.setOrganization(award.getOrganization());
            awardInput.setGrade(award.getGrade());
            awardInput.setDescription(award.getDescription());

            awardResponse.add(awardInput);
        }

        //License
        List<LicenseEntity> licenses = licenseRepository.findAllByUserId(userId);
        List<License> licenseResponse = new ArrayList<>();

        for (LicenseEntity license : licenses) {
            License licenseInput = new License();
            licenseInput.setId(license.getId());
            licenseInput.setTitle(license.getTitle());
            licenseInput.setDate(license.getDate());
            licenseInput.setDescription(license.getDescription());

            licenseResponse.add(licenseInput);
        }

        //Education
        List<EducationEntity> educations = educationRepository.findAllByUserId(userId);
        List<Education> educationResponse = new ArrayList<>();

        for (EducationEntity education : educations) {
            Education educationInput = new Education();
            educationInput.setId(education.getId());
            educationInput.setName(education.getName());
            educationInput.setMajor(education.getMajor());
            educationInput.setDegree(education.getDegree());
            educationInput.setAdmissionDate(education.getAdmissionDate());
            educationInput.setGraduationDate(education.getGraduationDate());
            educationInput.setMajorGrade(education.getMajorGrade());
            educationInput.setMajorCourse(education.getMajorCourse());
            educationInput.setGrade(education.getGrade());
            educationInput.setMaxGrade(education.getMaxGrade());
            educationInput.setCourse(education.getCourse());

            educationResponse.add(educationInput);
        }

        //Memo
        List<MemoEntity> memos = memoRepository.findAllByUserId(userId);
        List<Memo> memoResponse = new ArrayList<>();

        for (MemoEntity memo : memos) {
            Memo memoInput = new Memo();
            memoInput.setDescription(memo.getDescription());

            memoResponse.add(memoInput);
        }

        //LanguageSkill
        List<LanguageSkillEntity> languageSkills = languageSkillRepository.findAllByUserId(userId);
        List<LanguageSkill> languageSkillResponse = new ArrayList<>();

        for (LanguageSkillEntity languageSkill : languageSkills) {
            LanguageSkill languageSkillInput = new LanguageSkill();
            languageSkillInput.setId(languageSkill.getId());
            languageSkillInput.setTitle(languageSkill.getTitle());
            languageSkillInput.setGrade(languageSkill.getGrade());

            languageSkillResponse.add(languageSkillInput);
        }

        myPageResponse.setAwards(awardResponse);
        myPageResponse.setLicenses(licenseResponse);
        myPageResponse.setEducations(educationResponse);
        myPageResponse.setMemos(memoResponse);
        myPageResponse.setLanguageSkills(languageSkillResponse);

        return myPageResponse;
    }


    public void postProfile(String title, LocalDate date, String description, Integer userId) {
        //License
        LicenseEntity licenseEntity = new LicenseEntity();
        licenseEntity.setTitle(title);
        licenseEntity.setDate(date);
        licenseEntity.setDescription(description);
        licenseEntity.setUserId(userId);

        licenseRepository.save(licenseEntity);
        licenseRepository.flush();
    }


    //public MyPageResponse UpdateProfile(Integer userId) {}

    //public MyPageResponse DeleteProfile(Integer userId) {}
}