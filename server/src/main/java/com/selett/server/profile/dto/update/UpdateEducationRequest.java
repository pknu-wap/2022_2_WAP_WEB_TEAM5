package com.selett.server.profile.dto.update;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UpdateEducationRequest {
    @NotNull
    private Integer id;
    @NotNull
    @Size(max=50)
    private String name;
    @NotNull
    @Size(max=50)
    private String major;
    @NotNull
    @Size(max=20)
    private String degree;
    @NotNull
    private LocalDate admissionDate;
    @NotNull
    private LocalDate graduationDate;

    private Float majorGrade;
    private Integer majorCourse;
    private Float grade;
    private Float maxGrade;
    private Integer course;
}
