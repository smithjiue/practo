package com.practo.healthcare.dto.request;

import com.practo.healthcare.model.AppointmentType;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AppointmentRequest {

    @NotNull(message = "Doctor ID is required")
    private Long doctorId;

    @NotNull(message = "Clinic ID is required")
    private Long clinicId;

    @NotNull(message = "Appointment date and time is required")
    @Future(message = "Appointment must be scheduled for a future date and time")
    private LocalDateTime appointmentDateTime;

    private AppointmentType type = AppointmentType.IN_PERSON;
    private String symptoms;
    private String notes;

}