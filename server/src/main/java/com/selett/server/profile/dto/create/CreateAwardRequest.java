package com.selett.server.profile.dto.create;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class CreateAwardRequest {
    @NotNull
    private String title;
    @NotNull
    private LocalDate date;
    @NotNull
    private String organization;
    @NotNull
    private String grade;
    @NotNull
    @JsonProperty("user_id")
    private Integer userId;
}
