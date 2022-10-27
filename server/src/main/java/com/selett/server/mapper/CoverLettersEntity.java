package com.selett.server.mapper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cover_letters")
public class CoverLettersEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;

    @Column(nullable = false)
    private Boolean titleLock;

    private String description;

    @Column(nullable = false)
    private Boolean descriptionLock;

    @Column(nullable = false)
    private Integer position;

    @Column(nullable = false)
    private Integer listId;
}
