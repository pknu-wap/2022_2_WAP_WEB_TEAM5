package com.selett.server.api.profile.dto.create;

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
public class CreateEducationRequest {
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
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonProperty("admission_date")
    private LocalDate admissionDate;
    @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonProperty("graduation_date")
    private LocalDate graduationDate;

    @JsonProperty("major_grade")
    private Float majorGrade;
    @JsonProperty("major_course")
    private Integer majorCourse;
    private Float grade;
    @JsonProperty("max_grade")
    private Float maxGrade;
    private Integer course;
    @NotNull
    @JsonProperty("user_id")
    private Integer userId;
}
