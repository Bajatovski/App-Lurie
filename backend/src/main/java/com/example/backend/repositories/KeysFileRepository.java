package com.example.backend.repositories;

import com.example.backend.models.KeysFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeysFileRepository extends JpaRepository<KeysFile, Long> {
}
