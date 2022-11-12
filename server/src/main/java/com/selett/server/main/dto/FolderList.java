package com.selett.server.main.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.selett.server.mapper.ListEntity;
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

    private Integer prev;

    private Integer next;

    @JsonProperty("cover_letter")
    private List<CoverLetter> coverLetter;

    public FolderList(ListEntity listEntity, List<CoverLetter> coverLetter) {
        listId = listEntity.getListId();
        title = listEntity.getTitle();
        prev = listEntity.getPrev();
        next = listEntity.getNext();
        this.coverLetter = coverLetter;
    }
}