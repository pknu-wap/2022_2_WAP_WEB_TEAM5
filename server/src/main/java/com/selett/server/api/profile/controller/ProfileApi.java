package com.selett.server.api.profile.controller;

import com.selett.server.api.profile.dto.MyPageRequest;
import com.selett.server.api.profile.dto.MyPageResponse;
import com.selett.server.api.profile.dto.create.*;
import com.selett.server.api.profile.dto.delete.*;
import com.selett.server.api.profile.dto.update.*;
import com.selett.server.api.profile.service.ProfileService;
import com.selett.server.utils.RequestTokenValidation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/profile")
public class ProfileApi {
    private final ProfileService profileService;
    private final RequestTokenValidation requestTokenValidation;

    //여기서부터 get
    @GetMapping("")
    @Operation(summary = "프로필 조회", description = "프로필 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "OK",
                content = @Content(schema = @Schema(implementation = MyPageResponse.class)))
        }
    )
    @io.swagger.annotations.ApiResponses(
            @io.swagger.annotations.ApiResponse(
                    response = MyPageResponse.class, message = "OK", code = 200)
    )
    public ResponseEntity<?> getProfile(@Valid MyPageRequest myPageRequest,
                                        @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verify(token, myPageRequest.getUserId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        MyPageResponse myPageResponse = profileService.getProfile(myPageRequest.getUserId());

        return ResponseEntity.status(HttpStatus.OK).body(myPageResponse);
    }

    //여기서부터 create
    @PostMapping("/awards")
    @Operation(summary = "수상실적 추가", description = "수상 실적 추가합니다.")
    public ResponseEntity<?> postProfileAward(@Valid @RequestBody CreateAwardRequest createAwardRequest,
                                              @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verify(token, createAwardRequest.getUserId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.postProfileAward(createAwardRequest.getTitle(),
                createAwardRequest.getDate(),
                createAwardRequest.getOrganization(),
                createAwardRequest.getGrade(),
                createAwardRequest.getUserId());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("/educations")
    @Operation(summary = "학력 추가", description = "학력 추가합니다.")
    public ResponseEntity<?> postProfileEducation(@Valid @RequestBody CreateEducationRequest createEducationRequest,
                                                  @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verify(token, createEducationRequest.getUserId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.postProfileEducation(createEducationRequest.getName(),
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

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("/language-skills")
    @Operation(summary = "어학 성적 추가", description = "어학 성적 추가합니다.")
    public ResponseEntity<?> postProfileLanguageSkill(@Valid @RequestBody CreateLanguageSkillRequest createLanguageSkillRequest,
                                                      @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verify(token, createLanguageSkillRequest.getUserId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.postProfileLanguageSkill(createLanguageSkillRequest.getTitle(),
                createLanguageSkillRequest.getGrade(),
                createLanguageSkillRequest.getUserId());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("/licenses")
    @Operation(summary = "자격증 추가", description = "자격증 추가합니다.")
    public ResponseEntity<?> postProfileLicense(@Valid @RequestBody CreateLicenseRequest createLicenseRequest,
                                                @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verify(token, createLicenseRequest.getUserId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.postProfileLicense(createLicenseRequest.getTitle(),
                createLicenseRequest.getDate(),
                createLicenseRequest.getDescription(),
                createLicenseRequest.getUserId());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    //여기서부터 update
    @PutMapping("/awards")
    @Operation(summary = "수상 실적 갱신", description = "수상 실적 갱신합니다.")
    public ResponseEntity<?> updateProfileAward(@Valid @RequestBody UpdateAwardRequest updateAwardRequest,
                                                     @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyAward(token, updateAwardRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.updateProfileAward(updateAwardRequest);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/educations")
    @Operation(summary = "학력 갱신", description = "학력 갱신합니다.")
    public ResponseEntity<?> updateProfileEducation(@Valid @RequestBody UpdateEducationRequest updateEducationRequest,
                                       @RequestHeader("Authorizaton") String token) {
        try {
            requestTokenValidation.verifyAward(token, updateEducationRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.updateProfileEducation(updateEducationRequest);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/language-skills")
    @Operation(summary = "어학 성적 갱신", description = "어학 성적 갱신합니다.")
    public ResponseEntity<?> updateProfileLanguageSkill(@Valid @RequestBody UpdateLanguageSkillRequest updateLanguageSkillRequest,
                                           @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyAward(token, updateLanguageSkillRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.updateProfileLanguageSkill(updateLanguageSkillRequest);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/licenses")
    @Operation(summary = "자격증 갱신", description = "자격증 갱신합니다.")
    public ResponseEntity<?> updateProfileLicense(@Valid @RequestBody UpdateLicenseRequest updateLicenseRequest,
                                     @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyAward(token, updateLicenseRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.updateProfileLicense(updateLicenseRequest);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/memos")
    @Operation(summary = "메모 갱신", description = "메모 갱신합니다.")
    public ResponseEntity<?> updateProfileMemo(@Valid @RequestBody UpdateMemoRequest updateMemoRequest,
                                  @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyAward(token, updateMemoRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.updateProfileMemo(updateMemoRequest);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    //여기서부터 Delete
    @DeleteMapping("/awards")
    @Operation(summary = "수상 실적 삭제", description = "수상 실적 삭제합니다.")
    public ResponseEntity<?> deleteProfileAward(@Valid DeleteRequest deleteRequest, @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyAward(token, deleteRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.deleteProfileAward(deleteRequest.getId());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/educations")
    @Operation(summary = "학력 삭제", description = "학력 삭제합니다.")
    public ResponseEntity<?> deleteProfileEducation(@Valid DeleteRequest deleteRequest, @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyEducation(token, deleteRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.deleteProfileEducation(deleteRequest.getId());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/language-skills")
    @Operation(summary = "어학 성적 삭제", description = "어학 성적 삭제합니다.")
    public ResponseEntity<?> deleteProfileLanguageSkill(@Valid DeleteRequest deleteRequest, @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyLanguageSkill(token, deleteRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.deleteProfileLanguage(deleteRequest.getId());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/licenses")
    @Operation(summary = "자격증 삭제", description = "자격증 삭제합니다.")
    public ResponseEntity<?> deleteProfileLicense(@Valid DeleteRequest deleteRequest, @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyLicense(token, deleteRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        profileService.deleteProfileLicense(deleteRequest.getId());

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}