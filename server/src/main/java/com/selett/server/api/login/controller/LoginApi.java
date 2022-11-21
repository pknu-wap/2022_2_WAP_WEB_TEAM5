package com.selett.server.api.login.controller;

import com.selett.server.api.login.dto.LoginRequest;
import com.selett.server.api.login.dto.LoginResponse;
import com.selett.server.api.login.service.LoginService;
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
@RequestMapping("/login")
public class LoginApi {
    private final LoginService loginService;
    @PostMapping("")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "로그인 성공"),
            @ApiResponse(responseCode = "400", description = "로그인 실패")
    })
    @Operation(summary = "로그인", description = "로그인합니다.")
    public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest loginRequest) {
        LoginResponse loginResponse = loginService.login(loginRequest.getIdentification(), loginRequest.getPassword());

        if(loginResponse.getUserId() == null)
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(loginResponse);
    }
}
