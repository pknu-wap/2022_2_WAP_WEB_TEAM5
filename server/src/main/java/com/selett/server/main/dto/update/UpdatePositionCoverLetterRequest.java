package com.selett.server.main.dto.update;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdatePositionCoverLetterRequest {
    @NotNull
    private Integer id;

    @NotNull
    @JsonProperty("to_move_prev_id")
    private Integer toMovePrevId;

    @NotNull
    @JsonProperty("to_move_next_id")
    private Integer toMoveNextId;
}
