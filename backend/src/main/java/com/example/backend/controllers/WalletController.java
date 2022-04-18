package com.example.backend.controllers;

import com.example.backend.models.Wallet;
import com.example.backend.models.dtos.WalletDto;
import com.example.backend.services.WalletService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.FileNotFoundException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/wallets")
@Validated
public class WalletController {

    private final WalletService walletService;

    public WalletController(WalletService walletService) {
        this.walletService = walletService;
    }

    @PostMapping
    public ResponseEntity<Wallet> save(@Valid @RequestBody WalletDto walletDto){
        Wallet wallet = this.walletService.save(walletDto.getId(), walletDto.getWalletAddress(), walletDto.getUsername(), walletDto.getPassword(),
        walletDto.getTransferredAmount(), walletDto.getWalletType(), walletDto.getIpAddress());
        return ResponseEntity.ok().body(wallet);
    }

    @PostMapping("/pdf")
    public ResponseEntity<byte[]> print(@Valid @RequestBody WalletDto walletDto) throws FileNotFoundException {
        byte[] pdfFileInBytes = this.walletService.createPDF(walletDto.getWalletAddress(),walletDto.getUsername(), walletDto.getTransferredAmount());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        String fileName = "crypto.pdf";
        headers.setContentDispositionFormData(fileName, fileName);
        headers.setCacheControl("must-revalidate, post-check=0, pre-check-0");

        return ResponseEntity.ok().headers(headers).body(pdfFileInBytes);
    }
}
