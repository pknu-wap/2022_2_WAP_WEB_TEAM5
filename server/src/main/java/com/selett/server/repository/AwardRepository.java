package com.selett.server.repository;

import com.selett.server.mapper.AwardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AwardRepository extends JpaRepository<AwardEntity, Integer> {
    List<AwardEntity> findAllByUserId(Integer userId);
}