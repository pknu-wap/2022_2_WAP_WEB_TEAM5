package com.selett.server.repository;

import com.selett.server.mapper.ListEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ListRepository extends JpaRepository<ListEntity, Integer> {
    List<ListEntity> findAllByUserId(Integer userId);
    boolean existsByUserIdAndTitle(Integer userId, String title);
    ListEntity findByUserIdAndNext(Integer userId, Integer next);
    Long countByUserId(Integer userId);
    ListEntity findByListId(Integer listId);
}
