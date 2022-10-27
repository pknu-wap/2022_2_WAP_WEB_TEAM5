package com.selett.server.mapper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cover_letters")
public class CoverLetterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;

    @NotNull
    private Boolean titleLock;

    private String description;

    @NotNull
    private Boolean descriptionLock;

    @NotNull
    private Integer position;

    @NotNull
    private Integer listId;
}
