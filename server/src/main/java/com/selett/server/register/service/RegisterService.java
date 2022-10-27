package com.selett.server.register.service;

import com.selett.server.mapper.UserInfoEntity;
import com.selett.server.register.dto.RegisterResponse;
import com.selett.server.repository.UserInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegisterService {
    private final UserInfoRepository userInfoRepository;

    public RegisterResponse register(String identification, String password, String name, String email) {
        RegisterResponse registerResponse = new RegisterResponse();

        Boolean success = userInfoRepository.existsByIdentification(identification);
        if(success) {
            registerResponse.setSuccess(false);
            registerResponse.setMessage("중복된 아이디입니다.");
            return registerResponse;
        }

        success = userInfoRepository.existsByEmail(email);
        if(success) {
            registerResponse.setSuccess(false);
            registerResponse.setMessage("중복된 이메일입니다.");
            return registerResponse;
        }

        UserInfoEntity user = new UserInfoEntity();
        user.setIdentification(identification);
        user.setPassword(password);
        user.setName(name);
        user.setEmail(email);
        userInfoRepository.saveAndFlush(user);

        registerResponse.setSuccess(true);
        registerResponse.setMessage("회원가입 되었습니다.");
        return registerResponse;
    }
}
