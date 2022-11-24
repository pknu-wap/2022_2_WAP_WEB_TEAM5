package com.selett.server.profile.dto.update;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UpdateLanguageSkillRequest {
    @NotNull
    private Integer id;
    @NotNull
    @Size(max=200)
    private String title;
    @NotNull
    @Size(max=20)
    private String grade;
}
