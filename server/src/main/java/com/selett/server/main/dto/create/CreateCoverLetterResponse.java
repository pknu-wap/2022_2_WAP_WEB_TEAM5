package com.selett.server.main.dto.create;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.selett.server.main.dto.CoverLetter;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateCoverLetterResponse {
    @JsonProperty("prev_id")
    private Integer prevId;

    private CoverLetter coverLetter;
}
