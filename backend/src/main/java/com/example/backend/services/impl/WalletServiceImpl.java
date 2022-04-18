package com.example.backend.services.impl;

import com.example.backend.models.Wallet;
import com.example.backend.repositories.WalletRepository;
import com.example.backend.services.WalletService;
import com.lowagie.text.*;
import com.lowagie.text.pdf.CMYKColor;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.time.LocalDateTime;

@Service
public class WalletServiceImpl implements WalletService {

    private final WalletRepository walletRepository;

    public WalletServiceImpl(WalletRepository walletRepository) {
        this.walletRepository = walletRepository;
    }

    @Override
    public Wallet save(Long id, String walletAddress, String username, String password, Double transferredAmount, String walletType, String ipAddress) {
        Wallet wallet = new Wallet(id, walletAddress, username, hashPassword(password), transferredAmount, walletType, ipAddress, LocalDateTime.now());
        this.walletRepository.save(wallet);
        return wallet;
    }

    @Override
    public byte[] createPDF(String walletAddress, String username, Double transferredAmount) throws FileNotFoundException {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

        Document document = new Document(PageSize.A4);

        PdfWriter.getInstance(document, byteArrayOutputStream);

        document.open();

        PdfPTable table = new PdfPTable(3);

        table.setWidthPercentage(100f);
        table.setWidths(new int[] {3, 3, 3});
        table.setSpacingBefore(5);

        PdfPCell cell = new PdfPCell();

        cell.setBackgroundColor(CMYKColor.LIGHT_GRAY);
        cell.setPadding(5);

        Font font = FontFactory.getFont(FontFactory.TIMES_ROMAN);
        font.setColor(CMYKColor.BLACK);

        cell.setPhrase(new Phrase("Wallet address", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Username", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Transferred amount", font));
        table.addCell(cell);

        table.addCell(walletAddress);
        table.addCell(username);
        table.addCell(String.valueOf(transferredAmount));

        document.add(table);

        document.close();

        return byteArrayOutputStream.toByteArray();
    }

    private String hashPassword(String plainTextPassword){
        return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
    }
}
