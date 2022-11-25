package com.selett.server.profile.controller;

import com.selett.server.profile.dto.MyPageRequest;
import com.selett.server.profile.dto.MyPageResponse;
import com.selett.server.profile.dto.create.*;
import com.selett.server.profile.dto.delete.*;
import com.selett.server.profile.dto.update.*;
import com.selett.server.profile.service.MyPageService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/profile")
public class MyPageAPI {
    private final MyPageService myPageService;

    @GetMapping("")
    public MyPageResponse getProfile(@Valid MyPageRequest myPageRequest) {
        MyPageResponse myPageResponse = myPageService.getProfile(myPageRequest.getUserId());

        return myPageResponse;
    }

    @PostMapping("/awards")
    public void postProfileAward(@Valid @RequestBody CreateAwardRequest createAwardRequest) {
        myPageService.postProfileAward(createAwardRequest.getTitle(),
                createAwardRequest.getDate(),
                createAwardRequest.getOrganization(),
                createAwardRequest.getGrade(),
                createAwardRequest.getUserId());
    }

    @PostMapping("/educations")
    public void postProfileEducation(@Valid @RequestBody CreateEducationRequest createEducationRequest) {
        myPageService.postProfileEducation(createEducationRequest.getName(),
                createEducationRequest.getMajor(),
                createEducationRequest.getDegree(),
                createEducationRequest.getAdmissionDate(),
                createEducationRequest.getGraduationDate(),
                createEducationRequest.getMajorGrade(),
                createEducationRequest.getMajorCourse(),
                createEducationRequest.getGrade(),
                createEducationRequest.getMaxGrade(),
                createEducationRequest.getCourse(),
                createEducationRequest.getUserId());
    }

    @PostMapping("/language-skills")
    public void postProfileLanguageSkill(@Valid @RequestBody CreateLanguageSkillRequest createLanguageSkillRequest) {
        myPageService.postProfileLanguageSkill(createLanguageSkillRequest.getTitle(),
                createLanguageSkillRequest.getGrade(),
                createLanguageSkillRequest.getUserId());
    }

    @PostMapping("/licenses")
    public void postProfileLicesne(@Valid @RequestBody CreateLicenseRequest createLicenseRequest) {
        myPageService.postProfileLicense(createLicenseRequest.getTitle(),
                createLicenseRequest.getDate(),
                createLicenseRequest.getDescription(),
                createLicenseRequest.getUserId());
    }

    @PutMapping("/awards")
    public void updateProfileAward(@Valid @RequestBody UpdateAwardRequest updateAwardRequest) {
        myPageService.updateProfileAward(updateAwardRequest);
    }

    @PutMapping("/educations")
    public void updateProfileEducation(@Valid @RequestBody UpdateEducationRequest updateEducationRequest) {
        myPageService.updateProfileEducation(updateEducationRequest);
    }

    @PutMapping("/language-skills")
    public void updateProfileLanguageSkill(@Valid @RequestBody UpdateLanguageSkillRequest updateLanguageSkillRequest) {
        myPageService.updateProfileLanguageSkill(updateLanguageSkillRequest);
    }

    @PutMapping("/licenses")
    public void updateProfileLicense(@Valid @RequestBody UpdateLicenseRequest updateLicenseRequest) {
        myPageService.updateProfileLicense(updateLicenseRequest);
    }

    @PutMapping("/memos")
    public void updateProfileMemo(@Valid @RequestBody UpdateMemoRequest updateMemoRequest) {
        myPageService.updateProfileMemo(updateMemoRequest);
    }


    @DeleteMapping("/awards")
    public void deleteProfileAward(@Valid DeleteAwardRequest deleteAwardRequest) {
        myPageService.deleteProfileAward(deleteAwardRequest.getId());
    }

    @DeleteMapping("/educations")
    public void deleteProfileEducation(@Valid DeleteEducationRequest deleteEducationRequest) {
        myPageService.deleteProfileEducation(deleteEducationRequest.getId());
    }

    @DeleteMapping("/language-skills")
    public void deleteProfileLanguageSkill(@Valid DeleteLanguageSkillRequest deleteLanguageSkillRequest) {
        myPageService.deleteProfileLanguage(deleteLanguageSkillRequest.getId());
    }

    @DeleteMapping("/licenses")
    public void deleteProfileLicense(@Valid DeleteLicenseRequest deleteLicenseRequest) {
        myPageService.deleteProfileLicense(deleteLicenseRequest.getId());
    }
}
