package com.selett.server.api.main.dto.create;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.selett.server.api.main.dto.CoverLetter;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateCoverLetterResponse {
    @JsonProperty("cover_letter")
    private CoverLetter coverLetter;
}