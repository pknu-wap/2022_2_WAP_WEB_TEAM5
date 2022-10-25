package com.selett.server.register.dto;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    @NotNull
    private String identification;

    @NotNull
    private String password;

    @NotNull
    private String name;

    @NotNull
    private String email;
}
