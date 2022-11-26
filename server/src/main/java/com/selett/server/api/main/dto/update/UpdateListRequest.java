package com.selett.server.api.main.dto.update;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateListRequest {
    @NotNull
    @JsonProperty("list_id")
    private Integer listId;

    @Size(max = 200)
    private String title;
}