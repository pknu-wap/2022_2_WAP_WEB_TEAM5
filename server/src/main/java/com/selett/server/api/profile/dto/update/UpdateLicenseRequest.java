package com.selett.server.api.profile.dto.update;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UpdateLicenseRequest {
    @NotNull
    private Integer id;
    @Size(max=200)
    private String title;
    private LocalDate date;
    @Size(max=5000)
    private String description;
}
