package com.example.backend.models;

import com.example.backend.models.dtos.KeysFileDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Data
@Table(name = "keys_file")
public class KeysFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fileName;

    private String fileType;

    @Lob
    private byte[] data;

    @Column(name = "date_added")
    private LocalDateTime dateAdded;

    @Column(name = "date_deleted")
    private LocalDateTime dateDeleted;

    private boolean deleted;

    public KeysFile(String fileName, String fileType, byte[] data, LocalDateTime dateAdded, LocalDateTime dateDeleted, boolean deleted) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.dateAdded = dateAdded;
        this.dateDeleted = dateDeleted;
        this.deleted = deleted;
    }
}
