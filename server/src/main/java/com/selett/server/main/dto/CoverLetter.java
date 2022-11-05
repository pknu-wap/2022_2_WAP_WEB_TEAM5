package com.selett.server.main.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
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
}
