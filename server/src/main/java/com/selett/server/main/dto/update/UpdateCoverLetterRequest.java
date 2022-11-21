package com.selett.server.main.dto.update;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateCoverLetterRequest {
    @NotNull
    private Integer id;

    private String title;

    private String question;

    @JsonProperty("question_lock")
    private Boolean questionLock;

    private String description;

    @JsonProperty("description_lock")
    private Boolean descriptionLock;
}
