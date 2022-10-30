package com.selett.server.repository;

import com.selett.server.mapper.ListEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ListRepository extends JpaRepository<ListEntity, Integer> {
    List<ListEntity> findAllByUserIdOrderByPositionAsc(Integer userId);
}
