package com.selett.server.main.dto.create;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateListRequest {
    @NotNull
    @JsonProperty("user_id")
    private Integer userId;

    private String title;
}
