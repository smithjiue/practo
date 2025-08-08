package com.practo.healthcare.service;

import com.practo.healthcare.dto.request.AppointmentRequest;
import com.practo.healthcare.dto.response.AppointmentResponse;
import com.practo.healthcare.mapper.AppointmentMapper;
import com.practo.healthcare.model.*;
import com.practo.healthcare.repository.AppointmentRepository;
import com.practo.healthcare.repository.DoctorRepository;
import com.practo.healthcare.repository.ClinicRepository;
import com.practo.healthcare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.time.LocalDateTime;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private ClinicRepository clinicRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AppointmentMapper appointmentMapper;

    @Transactional
    public AppointmentResponse bookAppointment(AppointmentRequest request) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User patient = (User) auth.getPrincipal();

        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        Clinic clinic = clinicRepository.findById(request.getClinicId())
                .orElseThrow(() -> new RuntimeException("Clinic not found"));

        // Check for appointment conflicts
        if (hasAppointmentConflict(doctor, request.getAppointmentDateTime())) {
            throw new RuntimeException("Doctor is not available at this time");
        }

        Appointment appointment = new Appointment();
        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointment.setClinic(clinic);
        appointment.setAppointmentDateTime(request.getAppointmentDateTime());
        appointment.setType(request.getType());
        appointment.setSymptoms(request.getSymptoms());
        appointment.setNotes(request.getNotes());
        appointment.setConsultationFee(doctor.getConsultationFee());
        appointment.setStatus(AppointmentStatus.SCHEDULED);

        appointment = appointmentRepository.save(appointment);
        return appointmentMapper.toResponse(appointment);
    }

    public Page<AppointmentResponse> getPatientAppointments(AppointmentStatus status, Pageable pageable) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User patient = (User) auth.getPrincipal();

        Page<Appointment> appointments = appointmentRepository.findPatientAppointments(patient, status, pageable);
        return appointments.map(appointmentMapper::toResponse);
    }

    public Page<AppointmentResponse> getDoctorAppointments(Pageable pageable) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) auth.getPrincipal();

        Doctor doctor = doctorRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Doctor profile not found"));

        Page<Appointment> appointments = appointmentRepository.findByDoctorAndIsActiveTrue(doctor, pageable);
        return appointments.map(appointmentMapper::toResponse);
    }

    @Transactional
    public AppointmentResponse cancelAppointment(Long appointmentId, String reason) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) auth.getPrincipal();

        // Check if user has permission to cancel
        if (!appointment.getPatient().getId().equals(user.getId()) &&
                !appointment.getDoctor().getUser().getId().equals(user.getId())) {
            throw new RuntimeException("You don't have permission to cancel this appointment");
        }

        appointment.setStatus(AppointmentStatus.CANCELLED);
        appointment.setCancelledAt(LocalDateTime.now());
        appointment.setCancellationReason(reason);

        appointment = appointmentRepository.save(appointment);
        return appointmentMapper.toResponse(appointment);
    }

    private boolean hasAppointmentConflict(Doctor doctor, LocalDateTime appointmentDateTime) {
        LocalDateTime startTime = appointmentDateTime.minusMinutes(30);
        LocalDateTime endTime = appointmentDateTime.plusMinutes(30);

        return !appointmentRepository.findDoctorAppointmentsInDateRange(
                doctor, AppointmentStatus.SCHEDULED, startTime, endTime).isEmpty();
    }
}