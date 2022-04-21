package com.example.backend.services.impl;

import com.example.backend.exceptions.FileStorageException;
import com.example.backend.exceptions.KeysFileNotFoundException;
import com.example.backend.models.KeysFile;
import com.example.backend.models.dtos.KeysFileDto;
import com.example.backend.repositories.KeysFileRepository;
import com.example.backend.services.KeysFileService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class KeysFileServiceImpl implements KeysFileService {

    private final KeysFileRepository keysFileRepository;

    public KeysFileServiceImpl(KeysFileRepository keysFileRepository) {
        this.keysFileRepository = keysFileRepository;
    }

    @Override
    public List<KeysFile> findAll(int pageNumber, int pageSize, String sortBy){
        Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by(sortBy));
        Page<KeysFile> result = keysFileRepository.findAll(pageable);
        return result.getContent()
                .stream()
                .filter((keys) -> !(keys.isDeleted())).collect(Collectors.toList());
    }

    @Override
    public KeysFile findById(Long id){
        return keysFileRepository.findById(id).orElseThrow(
                () -> new KeysFileNotFoundException(id));
    }

    @Override
    public void delete(Long id){
        KeysFile keysFile = keysFileRepository.findById(id).orElseThrow(() -> new KeysFileNotFoundException(id));
        keysFile.setDateDeleted(LocalDateTime.now());
        keysFile.setDeleted(true);
        keysFileRepository.save(keysFile);
    }

    @Override
    public KeysFile update(Long id){
        KeysFile keysFile = keysFileRepository.findById(id).orElseThrow(() -> new KeysFileNotFoundException(id));
        keysFile.setDateDeleted(LocalDateTime.now());
        keysFile.setDeleted(true);
        return keysFileRepository.save(keysFile);
    }

    @Override
    public KeysFile storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            KeysFile keysFile = new KeysFile(fileName, file.getContentType(), file.getBytes(), LocalDateTime.now()  , null, false);

            return keysFileRepository.save(keysFile);
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }
}
