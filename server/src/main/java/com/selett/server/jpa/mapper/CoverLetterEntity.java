package com.selett.server.jpa.mapper;

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

    @NotNull
    private String title;

    private String question;

    @NotNull
    private Boolean questionLock;

    private String description;

    @NotNull
    private Boolean descriptionLock;

    private Integer prev;

    private Integer next;

    @NotNull
    private Integer listId;
}
