package com.selett.server.profile.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Education {
    private Integer id;
    private String name;
    private String major;
    private String degree;
    private LocalDate admissionDate;
    private LocalDate graduationDate;
    private Float majorGrade;
    private Integer majorCourse;
    private Float Grade;
    private Float maxGrade;
    private Integer course;
}
