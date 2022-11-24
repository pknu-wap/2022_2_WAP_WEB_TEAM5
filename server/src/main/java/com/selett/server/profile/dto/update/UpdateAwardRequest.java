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

public class UpdateAwardRequest {
    @NotNull
    private Integer id;
    private String title;
    private LocalDate date;
    @Size(max=50)
    private String organization;
    @Size(max=20)
    private String grade;
    private String description;
}
