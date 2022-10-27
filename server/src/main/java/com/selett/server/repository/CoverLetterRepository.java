package com.selett.server.repository;

import com.selett.server.mapper.CoverLetterEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoverLetterRepository extends JpaRepository<CoverLetterEntity, Integer> {
    List<CoverLetterEntity> findAllByListIdOrderByPositionAsc(Integer listId);
}