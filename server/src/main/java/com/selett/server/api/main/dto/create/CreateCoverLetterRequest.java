package com.selett.server.api.main.dto.create;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateCoverLetterRequest {
    @NotNull
    @JsonProperty("list_id")
    private Integer listId;

    @Size(max = 200)
    private String title;
}
