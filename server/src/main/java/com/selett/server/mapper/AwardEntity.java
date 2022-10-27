package com.selett.server.mapper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "awards")
public class AwardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    private String title;

    @NotNull
    private LocalDate date;

    @NotNull
    @Size(min = 1, max = 50)
    private String organization;

    @NotNull
    @Size(min = 1, max = 20)
    private String grade;

    private String description;

    @NotNull
    private Integer position;

    @NotNull
    private Integer userId;
}
