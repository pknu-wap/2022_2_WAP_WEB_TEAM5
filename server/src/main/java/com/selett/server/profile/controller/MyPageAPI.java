package com.selett.server.profile.controller;

import com.selett.server.profile.dto.MyPageRequest;
import com.selett.server.profile.dto.MyPageResponse;
import com.selett.server.profile.dto.create.CreateLicenseRequest;
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

    @PostMapping("/license")
    public void postProfile(@Valid @RequestBody CreateLicenseRequest createLicenseRequest) {
        myPageService.postProfile(createLicenseRequest.getTitle(),
                createLicenseRequest.getDate(),
                createLicenseRequest.getDescription(),
                createLicenseRequest.getUserId());
    }
}
