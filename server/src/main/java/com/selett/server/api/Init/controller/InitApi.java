package com.selett.server.api.Init.controller;

import com.selett.server.api.Init.service.InitService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@AllArgsConstructor
@RestController
@RequestMapping("/init")
public class InitApi {
    private final InitService initService;

    @GetMapping("")
    public void deleteAll() {
        initService.init();
    }
}
