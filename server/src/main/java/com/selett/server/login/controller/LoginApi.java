package com.selett.server.login.controller;

import com.selett.server.login.dto.LoginRequest;
import com.selett.server.login.dto.LoginResponse;
import com.selett.server.login.service.LoginService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/login")
public class LoginApi {
    private final LoginService loginService;
    @PostMapping("")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        LoginResponse loginResponse = loginService.login(loginRequest.getIdentification(), loginRequest.getPassword());

        return ResponseEntity.ok(loginResponse);
    }
}
