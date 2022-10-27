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
@Table(name = "educations")
public class EducationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 50)
    private String major;

    @Column(nullable = false, length = 20)
    private String degree;

    @Column(nullable = false)
    private LocalDate admissionDate;

    @Column(nullable = false)
    private LocalDate graduationDate;

    private Float majorGrade;

    private Integer majorCourse;

    private Float Grade;

    private Float maxGrade;

    private Integer course;

    @Column(nullable = false)
    private Integer position;

    @Column(nullable = false)
    private Integer userId;
}
