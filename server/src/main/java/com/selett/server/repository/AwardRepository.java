package com.selett.server.repository;

import com.selett.server.mapper.AwardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AwardRepository extends JpaRepository<AwardEntity, Integer> {
}