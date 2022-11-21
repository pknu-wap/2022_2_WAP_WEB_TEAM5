package com.selett.server.jpa.repository;

import com.selett.server.jpa.mapper.AwardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AwardRepository extends JpaRepository<AwardEntity, Integer> {
}