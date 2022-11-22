package com.selett.server.api.profile.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class MyPageResponse {
    List<Award> awards;
    List<Education> educations;
    List<License> licenses;
    List<Memo> memos;
    List<LanguageSkill> languageSkills;
}
