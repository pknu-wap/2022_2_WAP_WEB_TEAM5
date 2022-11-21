package com.selett.server.profile.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class LanguageSkill {
    private Integer id;
    private String title;
    private String grade;
}
