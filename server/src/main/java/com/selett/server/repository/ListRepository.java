package com.selett.server.repository;

import com.selett.server.mapper.ListEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListRepository extends JpaRepository<ListEntity, Integer> {
}
