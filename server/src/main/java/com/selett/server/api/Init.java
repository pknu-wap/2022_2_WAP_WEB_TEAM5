package com.selett.server.api;

import com.selett.server.jpa.repository.UserInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/init")
public class Init {
    private final UserInfoRepository userInfoRepository;

    @GetMapping("")
    public void deleteAll() {
        userInfoRepository.deleteAll();
    }
}
