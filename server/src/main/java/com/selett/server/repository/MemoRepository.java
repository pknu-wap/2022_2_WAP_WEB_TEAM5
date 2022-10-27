package com.selett.server.repository;

import com.selett.server.mapper.MemoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemoRepository extends JpaRepository<MemoEntity, Integer> {
}