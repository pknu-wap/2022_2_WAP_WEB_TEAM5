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

public class CreateAwardRequest {
    @NotNull
    @Size(min = 1, max = 200)
    private String title;
    @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    @NotNull
    @Size(min = 1, max = 50)
    private String organization;
    @NotNull
    @Size(min = 1, max = 20)
    private String grade;
    @NotNull
    @JsonProperty("user_id")
    private Integer userId;
}
