package com.selett.server.api.login.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {
    @NotNull
    @Size(min = 1, max = 20)
    private String identification;

    @NotNull
    @Size(min = 1, max = 20)
    private String password;
}
