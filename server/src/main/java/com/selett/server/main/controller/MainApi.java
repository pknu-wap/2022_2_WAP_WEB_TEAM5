package com.selett.server.main.controller;

import com.selett.server.main.dto.MainRequest;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("")
public class MainApi {

    @GetMapping("")
    public void getListAndCoverLetter(MainRequest mainRequest) {
        log.info(mainRequest.getUserId());
    }
}
