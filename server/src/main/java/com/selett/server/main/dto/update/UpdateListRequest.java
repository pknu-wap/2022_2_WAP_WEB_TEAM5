package com.selett.server.main.dto.update;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateListRequest {
    @NotNull
    @JsonProperty("list_id")
    private Integer listId;

    private String title;
}