package com.practo.healthcare.dto.request;

import com.practo.healthcare.model.Gender;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class DoctorSearchRequest {
    private String city;
    private String specialization;
    private Gender gender;
    private Integer minExperience;
    private BigDecimal minRating;
    private Boolean isAvailableToday;
    private String sortBy = "rating"; // rating, experience, fee, name
    private String sortDirection = "desc"; // asc, desc
    private int page = 0;
    private int size = 10;

}