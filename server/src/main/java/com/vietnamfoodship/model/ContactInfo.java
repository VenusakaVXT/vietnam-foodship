package com.vietnamfoodship.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor

public class ContactInfo {
    private String email;
    private String phone;
    private String facebook;
    private String instagram;
    private String youtube;
    private String tiktok;
}