package com.selett.server.api.profile.dto.update;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UpdateEducationRequest {
    @NotNull
    private Integer id;
    @Size(max = 50)
    private String name;
    @Size(max = 50)
    private String major;
    @Size(max = 20)
    private String degree;
    @JsonProperty("admission_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate admissionDate;
    @JsonProperty("graduation_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate graduationDate;
    @JsonProperty("major_grade")
    private Float majorGrade;
    @JsonProperty("major_course")
    private Integer majorCourse;
    private Float grade;
    @JsonProperty("max_grade")
    private Float maxGrade;
    private Integer course;
}
