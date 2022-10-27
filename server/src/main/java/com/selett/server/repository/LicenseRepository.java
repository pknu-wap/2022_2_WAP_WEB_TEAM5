package com.selett.server.repository;

import com.selett.server.mapper.LicenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LicenseRepository extends JpaRepository<LicenseEntity, Integer> {
}