package com.selett.server.login.repository;

import com.selett.server.login.dto.LoginEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<LoginEntity, Integer> {
}
