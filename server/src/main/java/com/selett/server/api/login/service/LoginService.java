package com.selett.server.api.login.service;

import com.selett.server.api.login.dto.LoginResponse;
import com.selett.server.jpa.mapper.UserInfoEntity;
import com.selett.server.jpa.repository.UserInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoginService {
    private final UserInfoRepository userInfoRepository;

    public LoginResponse login(String identification, String password) {
        Boolean success = userInfoRepository.existsByIdentificationAndPassword(identification, password);

        LoginResponse loginResponse = new LoginResponse();
        if(success) {
            UserInfoEntity user = userInfoRepository.findByIdentificationAndPassword(identification, password);
            loginResponse.setUserId(user.getUser_id());
        }

        return loginResponse;
    }
}
