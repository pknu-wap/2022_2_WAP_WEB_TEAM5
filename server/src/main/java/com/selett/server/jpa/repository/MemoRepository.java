package com.selett.server.jpa.repository;

import com.selett.server.jpa.mapper.MemoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemoRepository extends JpaRepository<MemoEntity, Integer> {
    List<MemoEntity> findAllByUserId(Integer userId);
}