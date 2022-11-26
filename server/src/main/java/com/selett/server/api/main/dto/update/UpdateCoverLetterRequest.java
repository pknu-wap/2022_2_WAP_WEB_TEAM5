package com.selett.server.api.main.dto.update;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateCoverLetterRequest {
    @NotNull
    private Integer id;

    @Size(max = 200)
    private String title;

    private String question;

    @JsonProperty("question_lock")
    private Boolean questionLock;

    @Size(max = 5000)
    private String description;

    @JsonProperty("description_lock")
    private Boolean descriptionLock;
}
