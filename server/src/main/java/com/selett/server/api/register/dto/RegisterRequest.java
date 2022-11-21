package com.selett.server.api.register.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    @NotNull
    @Size(min = 1, max = 20)
    private String identification;

    @NotNull
    @Size(min = 1, max = 20)
    private String password;

    @NotNull
    @Size(min = 1, max = 20)
    private String name;

    @NotNull
    @Email
    @Size(min = 1, max = 50)
    private String email;
}
