package com.example.backend.controllers;

import com.example.backend.models.KeysFile;
import com.example.backend.models.dtos.KeysFileDto;
import com.example.backend.payload.UploadFileResponse;
import com.example.backend.services.KeysFileService;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Validated
@RequestMapping("/api/keysfiles")
public class KeysFileController {

    private final KeysFileService keysFileService;

    public KeysFileController(KeysFileService keysFileService) {
        this.keysFileService = keysFileService;
    }

    @GetMapping
    public ResponseEntity<List<KeysFile>> findAll(
            @RequestParam(defaultValue = "0", name = "page") int pageNumber,
            @RequestParam(defaultValue = "10") int pageSize,
            @RequestParam(defaultValue = "id") String sortBy){
        List<KeysFile> keysFiles = keysFileService.findAll(pageNumber, pageSize, sortBy);
        return new ResponseEntity<>(keysFiles,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<KeysFile> findById(@PathVariable Long id){
        KeysFile keysFile = keysFileService.findById(id);
        return new ResponseEntity<>(keysFile, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        keysFileService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<KeysFile> update(@PathVariable Long id){
        KeysFile keysFile = keysFileService.update(id);
        return new ResponseEntity<>(keysFile, HttpStatus.OK);
    }

    @PostMapping("/uploadFile")
    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file) {
        KeysFile keysFile = keysFileService.storeFile(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(String.valueOf(keysFile.getId()))
                .toUriString();

        return new UploadFileResponse(keysFile.getFileName(), fileDownloadUri,
                file.getContentType());
    }

    @PostMapping("/uploadMultipleFiles")
    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        return Arrays.stream(files)
                .map(this::uploadFile)
                .collect(Collectors.toList());
    }

    @GetMapping("/downloadFile/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileId) {
        // Load file from database
        KeysFile keysFile = keysFileService.findById(Long.valueOf(fileId));

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(keysFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + keysFile.getFileName() + "\"")
                .body(new ByteArrayResource(keysFile.getData()));
    }
}
