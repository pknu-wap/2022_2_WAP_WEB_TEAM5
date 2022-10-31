package com.selett.server.main.controller;

import com.selett.server.main.dto.MainRequest;
import com.selett.server.main.dto.MainResponse;
import com.selett.server.main.service.MainService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("")
public class MainApi {
    private final MainService mainService;
    @GetMapping("")
    public ResponseEntity<MainResponse> getListAndCoverLetter(@Valid MainRequest mainRequest) {
        MainResponse mainResponse = mainService.getListAndCoverLetter(mainRequest.getUserId());

        return ResponseEntity.ok(mainResponse);
    }
}
