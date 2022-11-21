package com.selett.server.api.register.controller;

import com.selett.server.api.register.dto.RegisterRequest;
import com.selett.server.api.register.dto.RegisterResponse;
import com.selett.server.api.register.service.RegisterService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/register")
public class RegisterApi {
    private final RegisterService registerService;

    @PostMapping("")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "0 - 회원가입 성공"),
            @ApiResponse(responseCode = "400", description = "1 - 중복된 아이디, 2 - 중복된 이메일")
    })
    @Operation(summary = "회원가입", description = "회원가입합니다.")
    public ResponseEntity<RegisterResponse> register(@RequestBody @Valid RegisterRequest registerRequest) {
        RegisterResponse registerResponse = registerService.register(registerRequest.getIdentification(), registerRequest.getPassword(), registerRequest.getName(), registerRequest.getEmail());

        if (!registerResponse.getStatus().equals(0))
            return new ResponseEntity<>(registerResponse, HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(registerResponse);
    }
}
