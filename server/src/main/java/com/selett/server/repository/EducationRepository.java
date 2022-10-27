package com.selett.server.repository;

import com.selett.server.mapper.EducationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducationRepository extends JpaRepository<EducationEntity, Integer> {
}