package com.practo.healthcare.dto.response;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class ClinicResponse {
    private Long id;
    private String name;
    private String address;
    private String city;
    private String state;
    private String pincode;
    private String phoneNumber;
    private BigDecimal consultationFee;

}