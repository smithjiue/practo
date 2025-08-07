package com.practo.healthcare.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@Table(name = "doctors")
public class Doctor extends BaseEntity {

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @NotBlank
    @Column(nullable = false)
    private String specialization;

    @NotBlank
    @Column(nullable = false)
    private String qualification;

    @Column(nullable = false)
    private Integer experienceYears;

    @Column(columnDefinition = "TEXT")
    private String bio;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal consultationFee;

    @Column(nullable = false, precision = 3, scale = 2)
    private BigDecimal rating = BigDecimal.valueOf(0.0);

    @Column(nullable = false)
    private Integer totalReviews = 0;

    @Column(nullable = false)
    private Integer patientStories = 0;

    private String profileImageUrl;

    @Column(nullable = false)
    private Boolean isAvailableToday = false;

    @Column(nullable = false)
    private Boolean isVerified = false;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<DoctorClinic> clinics;

    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Appointment> appointments;
}