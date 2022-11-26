package com.selett.server.api.profile.dto.update;

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

public class UpdateAwardRequest {
    @NotNull
    private Integer id;
    @Size(max = 200)
    private String title;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    @Size(max = 50)
    private String organization;
    @Size(max = 20)
    private String grade;
    @Size(max = 5000)
    private String description;
}
