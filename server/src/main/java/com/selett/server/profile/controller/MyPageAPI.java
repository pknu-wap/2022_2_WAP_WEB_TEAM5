package com.selett.server.profile.controller;

import com.selett.server.profile.dto.MyPageRequest;
import com.selett.server.profile.dto.MyPageResponse;
import com.selett.server.profile.dto.create.*;
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

    @PostMapping("/award")
    public void postProfileAward(@Valid @RequestBody CreateAwardRequest createAwardRequest) {
        myPageService.postProfileAward(createAwardRequest.getTitle(),
                createAwardRequest.getDate(),
                createAwardRequest.getOrganization(),
                createAwardRequest.getGrade(),
                createAwardRequest.getUserId());
    }

    @PostMapping("/education")
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

    @PostMapping("languageskill")
    public void postProfileLanguageSkill(@Valid @RequestBody CreateLanguageSkillRequest createLanguageSkillRequest) {
        myPageService.postProfileLanguageSkill(createLanguageSkillRequest.getTitle(),
                createLanguageSkillRequest.getGrade(),
                createLanguageSkillRequest.getUserId());
    }

    @PostMapping("/license")
    public void postProfileLicesne(@Valid @RequestBody CreateLicenseRequest createLicenseRequest) {
        myPageService.postProfileLicense(createLicenseRequest.getTitle(),
                createLicenseRequest.getDate(),
                createLicenseRequest.getDescription(),
                createLicenseRequest.getUserId());
    }

    @PostMapping("/memo")
    public void postProfileMemo(@Valid @RequestBody CreateMemoRequest createMemoRequest) {
        myPageService.postProfileMemo(createMemoRequest.getDescription(),
                createMemoRequest.getUserId());
    }
}
