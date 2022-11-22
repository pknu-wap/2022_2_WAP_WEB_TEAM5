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

public class CreateLicenseRequest {
    @NotNull
    private String title;
    @NotNull
    private LocalDate date;

    private String description;
    @NotNull
    @JsonProperty("user_id")
    private Integer userId;
}
