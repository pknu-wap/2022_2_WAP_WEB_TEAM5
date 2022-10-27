package com.selett.server.mapper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

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

    @Column(nullable = false)
    private Integer position;

    @Column(nullable = false)
    private Integer userId;
}
