package com.selett.server.login.controller;

import com.selett.server.login.dto.LoginRequest;
import com.selett.server.login.dto.LoginResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginApi {

    @PostMapping("")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        return null;
    }
}
