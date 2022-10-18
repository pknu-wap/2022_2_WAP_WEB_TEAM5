package com.selett.server.login.service;

import com.selett.server.dto.UserInfoEntity;
import com.selett.server.login.dto.LoginRequest;
import com.selett.server.repository.UserInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoginService {
    private final UserInfoRepository userInfoRepository;

    public UserInfoEntity login(LoginRequest loginRequest) {
        return null;
    }
}
