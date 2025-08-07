package com.practo.healthcare.dto.response;

import com.practo.healthcare.model.AppointmentStatus;
import com.practo.healthcare.model.AppointmentType;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class AppointmentResponse {
    private Long id;
    private String patientName;
    private String doctorName;
    private String clinicName;
    private String clinicAddress;
    private LocalDateTime appointmentDateTime;
    private AppointmentStatus status;
    private AppointmentType type;
    private BigDecimal consultationFee;
    private String symptoms;
    private String notes;
    private String prescription;
    private LocalDateTime createdAt;

}
