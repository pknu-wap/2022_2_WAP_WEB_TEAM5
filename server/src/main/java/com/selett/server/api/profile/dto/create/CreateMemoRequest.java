package com.selett.server.api.profile.dto.create;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateMemoRequest {
    @Size(max = 5000)
    private String description;
    @NotNull
    @JsonProperty("user_id")
    private Integer userId;
}
