package com.selett.server.profile.dto.create;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class CreateLanguageSkillRequest {
    @NotNull
    private String title;
    @NotNull
    private String grade;
    @NotNull
    @JsonProperty("user_id")
    private Integer userId;
}
