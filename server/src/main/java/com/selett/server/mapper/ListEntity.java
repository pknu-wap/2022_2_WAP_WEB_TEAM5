package com.selett.server.mapper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "lists")
public class ListEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer list_id;

    @ColumnDefault(value = "TINYTEXT")
    private String title;

    @Column(nullable = false)
    private Integer position;

    @Column(nullable = false)
    private Integer user_id;
}
