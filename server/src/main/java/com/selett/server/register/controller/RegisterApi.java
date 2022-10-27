package com.selett.server.register.controller;

import com.selett.server.register.dto.RegisterRequest;
import com.selett.server.register.dto.RegisterResponse;
import com.selett.server.register.service.RegisterService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping("/register")
public class RegisterApi {
    private final RegisterService registerService;

    @PostMapping("")
    public ResponseEntity<RegisterResponse> register(@RequestBody @Valid RegisterRequest registerRequest) {
        RegisterResponse registerResponse = registerService.register(registerRequest.getIdentification(), registerRequest.getPassword(), registerRequest.getName(), registerRequest.getEmail());

        return ResponseEntity.ok(registerResponse);
    }
}
