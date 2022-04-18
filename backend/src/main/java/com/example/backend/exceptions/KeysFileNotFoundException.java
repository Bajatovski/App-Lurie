package com.example.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class KeysFileNotFoundException extends RuntimeException{
    public KeysFileNotFoundException(Long id){super("Keys file with id " + id + " is not found.");}
}
