package com.selett.server.login.service;

import com.selett.server.dto.UserInfoEntity;
import com.selett.server.repository.UserInfoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class LoginServiceTest {
    @Autowired
    private UserInfoRepository userInfoRepository;

    @Test
    public void searchAll() {
        List<UserInfoEntity> loginEntity = this.userInfoRepository.findAll();

        loginEntity.forEach(System.out::println);
    }
}