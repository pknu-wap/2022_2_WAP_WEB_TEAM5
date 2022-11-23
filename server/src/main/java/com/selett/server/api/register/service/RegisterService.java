package com.selett.server.api.register.service;

import com.selett.server.api.register.dto.RegisterResponse;
import com.selett.server.jpa.mapper.UserInfoEntity;
import com.selett.server.jpa.repository.UserInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RegisterService {
    private final UserInfoRepository userInfoRepository;
    private final PasswordEncoder passwordEncoder;

    public RegisterResponse register(String identification, String password, String name, String email) {
        RegisterResponse registerResponse = new RegisterResponse();

        Boolean success = userInfoRepository.existsByIdentification(identification);
        if(success) {
            registerResponse.setStatus(1);
            return registerResponse;
        }

        success = userInfoRepository.existsByEmail(email);
        if(success) {
            registerResponse.setStatus(2);
            return registerResponse;
        }

        UserInfoEntity user = new UserInfoEntity();
        user.setIdentification(identification);
        user.setPassword(password);
        user.encodePassword(passwordEncoder);
        user.setName(name);
        user.setEmail(email);
        user.setRoles(List.of("ROLE_USER"));
        userInfoRepository.saveAndFlush(user);

        registerResponse.setStatus(0);

        return registerResponse;
    }

    public void changePassword(Integer userId, String password) {
        UserInfoEntity userInfoEntity = userInfoRepository.findById(userId).get();

        userInfoEntity.setPassword(password);
        userInfoRepository.saveAndFlush(userInfoEntity);
    }
}
