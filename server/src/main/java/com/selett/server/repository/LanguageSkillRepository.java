package com.selett.server.repository;

import com.selett.server.mapper.LanguageSkillEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LanguageSkillRepository extends JpaRepository<LanguageSkillEntity, Integer> {
    List<LanguageSkillEntity> findAllByUserId(Integer userId);
}