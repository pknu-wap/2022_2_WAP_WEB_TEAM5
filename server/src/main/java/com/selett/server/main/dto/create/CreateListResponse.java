package com.selett.server.main.dto.create;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.selett.server.main.dto.FolderList;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateListResponse {
    @JsonProperty("prev_list_id")
    private Integer prevListId;

    @JsonProperty("prev_id")
    private Integer prevId;

    private FolderList list;
}
