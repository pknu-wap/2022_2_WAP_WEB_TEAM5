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
@Table(name = "lists")
public class ListEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer listId;

    private String title;

    @NotNull
    private Integer prev;

    @NotNull
    private Integer next;

    @NotNull
    private Integer userId;
}
