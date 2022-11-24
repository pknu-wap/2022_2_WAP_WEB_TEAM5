package com.selett.server.profile.dto.delete;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class DeleteMemoRequest {
    @NotNull
    private Integer id;
}
