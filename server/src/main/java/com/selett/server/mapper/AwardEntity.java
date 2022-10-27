package com.selett.server.mapper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "awards")
public class AwardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false, length = 50)
    private String organization;

    @Column(nullable = false, length = 20)
    private String grade;

    private String description;

    @Column(nullable = false)
    private Integer position;

    @Column(nullable = false)
    private Integer userId;
}
