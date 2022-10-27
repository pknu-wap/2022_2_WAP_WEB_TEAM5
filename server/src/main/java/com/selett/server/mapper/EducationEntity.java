package com.selett.server.mapper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
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

    @NotNull
    @Size(min = 1, max = 50)
    private String name;

    @NotNull
    @Size(min = 1, max = 50)
    private String major;

    @NotNull
    @Size(min = 1, max = 20)
    private String degree;

    @NotNull
    private LocalDate admissionDate;

    @NotNull
    private LocalDate graduationDate;

    private Float majorGrade;

    private Integer majorCourse;

    private Float Grade;

    private Float maxGrade;

    private Integer course;

    @NotNull
    private Integer position;

    @NotNull
    private Integer userId;
}
