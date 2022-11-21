package com.selett.server.api.main.dto.update;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdatePositionCoverLetterDiffListRequest {
    @NotNull
    private Integer id;

    @NotNull
    @JsonProperty("to_move_list_id")
    private Integer toMoveListId;
}
