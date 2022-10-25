package com.selett.server.repository;

import com.selett.server.mapper.UserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UserInfoEntity, Integer> {
    UserInfoEntity findByIdentificationAndPassword(String identification, String password);
    Boolean existsByIdentificationAndPassword(String identification, String password);
    Boolean existsByIdentification(String identification);
    Boolean existsByEmail(String email);
}