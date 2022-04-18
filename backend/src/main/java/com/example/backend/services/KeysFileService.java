package com.example.backend.services;

import com.example.backend.models.KeysFile;
import com.example.backend.models.dtos.KeysFileDto;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

public interface KeysFileService {

    List<KeysFile> findAll(int pageNumber, int pageSize, String sortBy);

    KeysFile findById(Long id);

    void delete(Long id);

    KeysFile storeFile(MultipartFile file);

    KeysFile update(Long id);
}
