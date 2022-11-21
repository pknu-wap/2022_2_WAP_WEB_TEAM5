package com.selett.server.repository;

import com.selett.server.mapper.LicenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LicenseRepository extends JpaRepository<LicenseEntity, Integer> {
    List<LicenseEntity> findAllByUserId(Integer userId);
}
