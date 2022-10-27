package com.selett.server.login.service;

import com.selett.server.login.dto.LoginResponse;
import com.selett.server.mapper.UserInfoEntity;
import com.selett.server.repository.UserInfoRepository;
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
            loginResponse.setSuccess(true);
            loginResponse.setUserId(user.getUser_id());
        }
        else
            loginResponse.setSuccess(false);

        return loginResponse;
    }
}
