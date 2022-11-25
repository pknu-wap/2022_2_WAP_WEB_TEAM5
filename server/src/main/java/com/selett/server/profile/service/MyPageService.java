package com.selett.server.profile.service;

import com.selett.server.mapper.*;
import com.selett.server.profile.dto.*;
import com.selett.server.profile.dto.update.*;
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

    //Award
    public void postProfileAward(String title, LocalDate date, String organization, String grade, Integer userId) {
        AwardEntity awardEntity = new AwardEntity();
        awardEntity.setTitle(title);
        awardEntity.setDate(date);
        awardEntity.setOrganization(organization);
        awardEntity.setGrade(grade);
        awardEntity.setUserId(userId);

        awardRepository.save(awardEntity);
        awardRepository.flush();
    }

    //Education
    public void postProfileEducation(String name, String major, String degree, LocalDate admissionDate, LocalDate graduationDate,
                                     Float majorGrade, Integer majorCourse, Float grade, Float maxGrade, Integer course,Integer userId) {
        EducationEntity educationEntity = new EducationEntity();
        educationEntity.setName(name);
        educationEntity.setMajor(major);
        educationEntity.setDegree(degree);
        educationEntity.setAdmissionDate(admissionDate);
        educationEntity.setGraduationDate(graduationDate);
        educationEntity.setMajorGrade(majorGrade);
        educationEntity.setMajorCourse(majorCourse);
        educationEntity.setGrade(grade);
        educationEntity.setMaxGrade(maxGrade);
        educationEntity.setCourse(course);
        educationEntity.setUserId(userId);

        educationRepository.save(educationEntity);
        educationRepository.flush();
    }

    //LanguageSkill
    public void postProfileLanguageSkill(String title, String grade, Integer userId) {
        LanguageSkillEntity languageSkillEntity = new LanguageSkillEntity();
        languageSkillEntity.setTitle(title);
        languageSkillEntity.setGrade(grade);
        languageSkillEntity.setUserId(userId);

        languageSkillRepository.save(languageSkillEntity);
        languageSkillRepository.flush();
    }

    //License
    public void postProfileLicense(String title, LocalDate date, String description, Integer userId) {
        LicenseEntity licenseEntity = new LicenseEntity();
        licenseEntity.setTitle(title);
        licenseEntity.setDate(date);
        licenseEntity.setDescription(description);
        licenseEntity.setUserId(userId);

        licenseRepository.save(licenseEntity);
        licenseRepository.flush();
    }


    public void deleteProfileAward(Integer id) {
        awardRepository.deleteById(id);
    }
    public void deleteProfileEducation(Integer id) { educationRepository.deleteById(id); }
    public void deleteProfileLanguage(Integer id) { languageSkillRepository.deleteById(id); }
    public void deleteProfileLicense(Integer id) { languageSkillRepository.deleteById(id); }

    public void updateProfileAward(UpdateAwardRequest updateAwardRequest) {
        AwardEntity updateAward = awardRepository.findById(updateAwardRequest.getId()).get();

        if (updateAwardRequest.getTitle() != null) {
            updateAward.setTitle(updateAward.getTitle());
        }
        if (updateAwardRequest.getDate() != null) {
            updateAward.setDate(updateAward.getDate());
        }
        if (updateAwardRequest.getOrganization() != null) {
            updateAward.setOrganization(updateAward.getOrganization());
        }
        if (updateAwardRequest.getGrade() != null) {
            updateAward.setGrade(updateAward.getGrade());
        }
        if (updateAwardRequest.getDescription() != null) {
            updateAward.setDescription(updateAward.getDescription());
        }

        awardRepository.save(updateAward);
        awardRepository.flush();
    }

    public void updateProfileEducation(UpdateEducationRequest updateEducationRequest) {
        EducationEntity updateEducation = educationRepository.findById(updateEducationRequest.getId()).get();

        if(updateEducationRequest.getName() != null) {
            updateEducation.setName(updateEducation.getName());
        }
        if(updateEducationRequest.getMajor() != null) {
            updateEducation.setMajor(updateEducation.getMajor());
        }
        if(updateEducationRequest.getDegree() != null) {
            updateEducation.setDegree(updateEducation.getDegree());
        }
        if(updateEducationRequest.getAdmissionDate() != null) {
            updateEducation.setAdmissionDate(updateEducation.getAdmissionDate());
        }
        if(updateEducationRequest.getGraduationDate() != null) {
            updateEducation.setGraduationDate(updateEducation.getGraduationDate());
        }
        if(updateEducationRequest.getMajorGrade() != null) {
            updateEducation.setMajorGrade(updateEducationRequest.getMajorGrade());
        }
        if(updateEducationRequest.getMajorCourse() != null) {
            updateEducation.setMajorCourse(updateEducationRequest.getMajorCourse());
        }
        if(updateEducationRequest.getCourse() != null) {
            updateEducation.setGrade(updateEducation.getGrade());
        }
        if(updateEducationRequest.getMaxGrade() != null) {
            updateEducation.setMaxGrade(updateEducationRequest.getMaxGrade());
        }
        if(updateEducationRequest.getCourse() != null) {
            updateEducation.setCourse(updateEducationRequest.getCourse());
        }

        educationRepository.save(updateEducation);
        educationRepository.flush();
    }

    public void updateProfileLanguageSkill(UpdateLanguageSkillRequest updateLanguageSkillRequest) {
        LanguageSkillEntity updateLanguageSkill = languageSkillRepository.findById(updateLanguageSkillRequest.getId()).get();

        if(updateLanguageSkill.getTitle() != null) {
            updateLanguageSkill.setTitle(updateLanguageSkill.getTitle());
        }
        if(updateLanguageSkill.getGrade() != null) {
            updateLanguageSkill.setGrade(updateLanguageSkill.getGrade());
        }

        languageSkillRepository.save(updateLanguageSkill);
        languageSkillRepository.flush();
    }

    public void updateProfileLicense(UpdateLicenseRequest updateLicenseRequest) {
        LicenseEntity updateLicense = licenseRepository.findById(updateLicenseRequest.getId()).get();

        if(updateLicense.getTitle() != null) {
            updateLicense.setTitle(updateLicense.getTitle());
        }
        if(updateLicense.getDate() != null) {
            updateLicense.setDate(updateLicense.getDate());
        }
        if(updateLicense.getDescription() != null) {
            updateLicense.setDescription(updateLicenseRequest.getDescription());
        }

        licenseRepository.save(updateLicense);
        licenseRepository.flush();
    }

    public void updateProfileMemo(UpdateMemoRequest updateMemoRequest) {
        MemoEntity updateMemo = memoRepository.findById(updateMemoRequest.getId()).get();

        if(updateMemo.getDescription() != null) {
            updateMemo.setDescription(updateMemo.getDescription());
        }

        memoRepository.save(updateMemo);
        memoRepository.flush();
    }

}