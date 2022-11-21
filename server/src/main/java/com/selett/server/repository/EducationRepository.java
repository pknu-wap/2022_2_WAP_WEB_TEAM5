package com.selett.server.repository;

import com.selett.server.mapper.EducationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EducationRepository extends JpaRepository<EducationEntity, Integer> {
    List<EducationEntity> findAllByUserId(Integer userId);
}