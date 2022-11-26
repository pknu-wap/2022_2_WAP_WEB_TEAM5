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

public class CreateLicenseRequest {
    @NotNull
    @Size(min = 1, max = 200)
    private String title;
    @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    @Size(max = 5000)
    private String description;
    @NotNull
    @JsonProperty("user_id")
    private Integer userId;
}
