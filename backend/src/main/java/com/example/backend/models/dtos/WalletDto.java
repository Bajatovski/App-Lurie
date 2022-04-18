package com.example.backend.models.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class WalletDto {

    private Long id;

    @NotEmpty
    private String walletAddress;

    @NotEmpty
    private String username;

    @NotEmpty
    private String password;

    @NotNull
    @Min(value = 0, message = "Transferred amount should be positive number")
    private Double transferredAmount;

    @NotEmpty
    private String walletType;

    @NotEmpty
    private String ipAddress;

}
