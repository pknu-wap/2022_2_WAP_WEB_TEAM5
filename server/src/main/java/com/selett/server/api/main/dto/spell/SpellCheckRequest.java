package com.selett.server.api.main.dto.spell;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpellCheckRequest {
    @NotNull
    private Integer id;
}
