package com.selett.server.api.profile.dto.create;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateEducationRequest {
    @NotNull
    private String name;
    @NotNull
    private String major;
    @NotNull
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
    @NotNull
    @JsonProperty("user_id")
    private Integer userId;
}
