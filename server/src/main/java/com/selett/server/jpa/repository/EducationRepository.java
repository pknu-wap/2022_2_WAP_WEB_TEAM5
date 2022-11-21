package com.selett.server.jpa.repository;

import com.selett.server.jpa.mapper.EducationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducationRepository extends JpaRepository<EducationEntity, Integer> {
}