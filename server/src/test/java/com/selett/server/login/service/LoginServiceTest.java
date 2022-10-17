package com.selett.server.login.service;

import com.selett.server.login.dto.LoginEntity;
import com.selett.server.login.repository.LoginRepository;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class LoginServiceTest {
    @Autowired
    private LoginRepository loginRepository;

    @Test
    public void searchAll() {
        List<LoginEntity> loginEntity = this.loginRepository.findAll();

        loginEntity.forEach(System.out::println);
    }
}