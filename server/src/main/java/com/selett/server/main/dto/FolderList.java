package com.selett.server.main.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FolderList {
    @JsonProperty("list_id")
    private Integer listId;

    private String title;

    @JsonProperty("cover_letter")
    private List<CoverLetter> coverLetter;
}
