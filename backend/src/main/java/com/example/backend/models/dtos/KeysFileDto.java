package com.example.backend.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class KeysFileDto {

    private Long id;

    private String fileName;

    private String fileType;

    private byte[] data;

    private LocalDateTime dateAdded;

    private LocalDateTime dateDeleted;

    private boolean deleted;
}
