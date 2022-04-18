package com.example.backend.services;

import java.io.FileNotFoundException;
import java.time.LocalDateTime;
import com.example.backend.models.Wallet;

public interface WalletService {

    Wallet save(Long id, String walletAddress, String username,
                String password, Double transferredAmount,
                String walletType, String ipAddress);

    byte[] createPDF(String walletAddress, String username, Double transferredAmount) throws FileNotFoundException;

}
