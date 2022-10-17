package com.selett.server.login.service;

import com.selett.server.login.dto.LoginEntity;
import com.selett.server.login.dto.LoginRequest;
import com.selett.server.login.repository.LoginRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoginService {
    private final LoginRepository loginRepository;

    public LoginEntity login(LoginRequest loginRequest) {
        return null;
    }
}
