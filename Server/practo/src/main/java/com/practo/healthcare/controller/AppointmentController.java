package com.practo.healthcare.controller;

import com.practo.healthcare.dto.request.AppointmentRequest;
import com.practo.healthcare.dto.response.AppointmentResponse;
import com.practo.healthcare.model.AppointmentStatus;
import com.practo.healthcare.service.AppointmentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/appointments")
@Tag(name = "Appointments", description = "Appointment management APIs")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    @Operation(summary = "Book appointment", description = "Book a new appointment")
    public ResponseEntity<AppointmentResponse> bookAppointment(@Valid @RequestBody AppointmentRequest request) {
        AppointmentResponse response = appointmentService.bookAppointment(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/patient")
    @Operation(summary = "Get patient appointments", description = "Get appointments for logged-in patient")
    public ResponseEntity<Page<AppointmentResponse>> getPatientAppointments(
            @RequestParam(required = false) AppointmentStatus status,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<AppointmentResponse> appointments = appointmentService.getPatientAppointments(status, pageable);
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/doctor")
    @Operation(summary = "Get doctor appointments", description = "Get appointments for logged-in doctor")
    public ResponseEntity<Page<AppointmentResponse>> getDoctorAppointments(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<AppointmentResponse> appointments = appointmentService.getDoctorAppointments(pageable);
        return ResponseEntity.ok(appointments);
    }

    @PutMapping("/{id}/cancel")
    @Operation(summary = "Cancel appointment", description = "Cancel an appointment")
    public ResponseEntity<AppointmentResponse> cancelAppointment(
            @PathVariable Long id,
            @RequestParam String reason) {

        AppointmentResponse response = appointmentService.cancelAppointment(id, reason);
        return ResponseEntity.ok(response);
    }
}