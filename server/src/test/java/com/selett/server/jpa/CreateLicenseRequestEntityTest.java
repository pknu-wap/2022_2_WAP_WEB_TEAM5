package com.selett.server.jpa;

import com.selett.server.repository.LicenseRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CreateLicenseRequestEntityTest {

    @Autowired
    private LicenseRepository licenseRepository;

    @Test
    public void searchAll() {
        licenseRepository.findAll().forEach(System.out::println);
    }

}
