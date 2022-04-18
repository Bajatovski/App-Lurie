package com.example.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "wallets")
public class Wallet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "wallet_address")
    private String walletAddress;

    private String username;

    private String password;

    @Column(name = "transferred_amount")
    private Double transferredAmount;

    @Column(name = "wallet_type")
    private String walletType;

    @Column(name = "ip_address")
    private String ipAddress;

    @Column(name = "date_submitted")
    private LocalDateTime dateSubmitted;

}
