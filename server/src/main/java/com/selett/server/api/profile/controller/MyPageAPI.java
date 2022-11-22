package com.selett.server.api.profile.controller;

import com.selett.server.api.profile.dto.MyPageRequest;
import com.selett.server.api.profile.dto.MyPageResponse;
import com.selett.server.api.profile.dto.create.*;
import com.selett.server.api.profile.service.MyPageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "프로필 조회 성공")
    })
    @Operation(summary = "프로필 조회", description = "프로필 조회합니다.")
    public MyPageResponse getProfile(@Valid MyPageRequest myPageRequest) {
        MyPageResponse myPageResponse = myPageService.getProfile(myPageRequest.getUserId());

        return myPageResponse;
    }

    @PostMapping("/awards")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "수상 실적 추가 성공")
    })
    @Operation(summary = "수상실적 추가", description = "수상 실적 추가합니다.")
    public void postProfileAward(@Valid @RequestBody CreateAwardRequest createAwardRequest) {
        myPageService.postProfileAward(createAwardRequest.getTitle(),
                createAwardRequest.getDate(),
                createAwardRequest.getOrganization(),
                createAwardRequest.getGrade(),
                createAwardRequest.getUserId());
    }

    @PostMapping("/educations")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "학력 추가 성공")
    })
    @Operation(summary = "학력 추가", description = "학력 추가합니다.")
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
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "어학 성적 추가 성공")
    })
    @Operation(summary = "어학 성적 추가", description = "어학 성적 추가합니다.")
    public void postProfileLanguageSkill(@Valid @RequestBody CreateLanguageSkillRequest createLanguageSkillRequest) {
        myPageService.postProfileLanguageSkill(createLanguageSkillRequest.getTitle(),
                createLanguageSkillRequest.getGrade(),
                createLanguageSkillRequest.getUserId());
    }

    @PostMapping("/licenses")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "자격증 추가 성공")
    })
    @Operation(summary = "자격증 추가", description = "자격증 추가합니다.")
    public void postProfileLicense(@Valid @RequestBody CreateLicenseRequest createLicenseRequest) {
        myPageService.postProfileLicense(createLicenseRequest.getTitle(),
                createLicenseRequest.getDate(),
                createLicenseRequest.getDescription(),
                createLicenseRequest.getUserId());
    }

    @PostMapping("/memos")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "메모 추가 성공")
    })
    @Operation(summary = "메모 추가", description = "메모 추가합니다.")
    public void postProfileMemo(@Valid @RequestBody CreateMemoRequest createMemoRequest) {
        myPageService.postProfileMemo(createMemoRequest.getDescription(),
                createMemoRequest.getUserId());
    }
}