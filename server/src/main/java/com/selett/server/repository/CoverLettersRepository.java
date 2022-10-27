package com.selett.server.repository;

import com.selett.server.mapper.CoverLettersEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoverLettersRepository extends JpaRepository<CoverLettersEntity, Integer> {
}