package com.selett.server.api.register.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChangePasswordRequest {
    @NotNull
    @JsonProperty("user_id")
    private Integer userId;

    @NotNull
    @Size(min = 1, max = 20)
    @JsonProperty("current_password")
    private String currentPassword;

    @NotNull
    @Size(min = 1, max = 20)
    @JsonProperty("new_password")
    private String newPassword;
}
