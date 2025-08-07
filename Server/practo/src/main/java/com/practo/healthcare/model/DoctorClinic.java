package com.practo.healthcare.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalTime;
import java.util.Set;

@Data
@Entity
@Table(name = "doctor_clinics")
public class DoctorClinic extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "clinic_id", nullable = false)
    private Clinic clinic;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal consultationFee;

    private LocalTime startTime;
    private LocalTime endTime;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<DayOfWeek> availableDays;

    @Column(nullable = false)
    private Boolean isActive = true;

}
