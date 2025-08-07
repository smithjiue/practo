package com.practo.healthcare.dto.response;

import com.practo.healthcare.model.Gender;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class DoctorResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String specialization;
    private String qualification;
    private Integer experienceYears;
    private String bio;
    private BigDecimal consultationFee;
    private BigDecimal rating;
    private Integer totalReviews;
    private Integer patientStories;
    private String profileImageUrl;
    private Boolean isAvailableToday;
    private Gender gender;
    private List<ClinicResponse> clinics;
}