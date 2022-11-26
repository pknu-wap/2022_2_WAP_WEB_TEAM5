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

public class CreateLanguageSkillRequest {
    @NotNull
    @Size(min = 1, max = 200)
    private String title;
    @NotNull
    @Size(min = 1, max = 20)
    private String grade;
    @NotNull
    @JsonProperty("user_id")
    private Integer userId;
}
