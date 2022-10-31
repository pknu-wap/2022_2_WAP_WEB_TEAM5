package com.selett.server.login.controller;

import com.selett.server.login.dto.LoginRequest;
import com.selett.server.login.dto.LoginResponse;
import com.selett.server.login.service.LoginService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/login")
public class LoginApi {
    private final LoginService loginService;
    @PostMapping("")
    public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest loginRequest) {
        LoginResponse loginResponse = loginService.login(loginRequest.getIdentification(), loginRequest.getPassword());

        return ResponseEntity.ok(loginResponse);
    }
}
