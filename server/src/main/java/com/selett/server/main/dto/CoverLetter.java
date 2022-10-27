package com.selett.server.main.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CoverLetter {
    private Integer id;
    private String title;
    private Boolean titleLock;
    private String description;
    private Boolean descriptionLock;
}
