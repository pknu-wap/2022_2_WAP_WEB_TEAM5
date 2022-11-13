package com.selett.server.main.dto.update;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdatePositionListRequest {
    @NotNull
    @JsonProperty("list_id")
    private Integer listId;

    @NotNull
    @JsonProperty("to_move_prev_list_id")
    private Integer toMovePrevListId;

    @NotNull
    @JsonProperty("to_move_next_list_id")
    private Integer toMoveNextListId;
}
