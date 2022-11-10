package com.selett.server.main.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.selett.server.mapper.CoverLetterEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CoverLetter {
    private Integer id;

    private String title;

    private String question;

    @JsonProperty("question_lock")
    private Boolean questionLock;

    private String description;

    @JsonProperty("description_lock")
    private Boolean descriptionLock;

    private Integer prev;

    private Integer next;
    public CoverLetter(CoverLetterEntity coverLetterEntity) {
        id = coverLetterEntity.getId();
        title = coverLetterEntity.getTitle();
        question = coverLetterEntity.getQuestion();
        questionLock = coverLetterEntity.getQuestionLock();
        description = coverLetterEntity.getDescription();
        descriptionLock = coverLetterEntity.getDescriptionLock();
        prev = coverLetterEntity.getPrev();
        next = coverLetterEntity.getNext();
    }
}
