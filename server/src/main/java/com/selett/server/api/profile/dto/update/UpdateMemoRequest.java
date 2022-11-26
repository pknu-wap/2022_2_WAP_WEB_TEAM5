package com.selett.server.api.profile.dto.update;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UpdateMemoRequest {
    @NotNull
    private Integer id;
    @Size(max=5000)
    private String description;
}
