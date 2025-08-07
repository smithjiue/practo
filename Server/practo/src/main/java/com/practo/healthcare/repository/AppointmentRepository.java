package com.practo.healthcare.repository;

import com.practo.healthcare.model.Appointment;
import com.practo.healthcare.model.AppointmentStatus;
import com.practo.healthcare.model.User;
import com.practo.healthcare.model.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    Page<Appointment> findByPatientAndIsActiveTrue(User patient, Pageable pageable);
    Page<Appointment> findByDoctorAndIsActiveTrue(Doctor doctor, Pageable pageable);

    @Query("SELECT a FROM Appointment a WHERE a.patient = :patient " +
            "AND (:status IS NULL OR a.status = :status) " +
            "AND a.isActive = true ORDER BY a.appointmentDateTime DESC")
    Page<Appointment> findPatientAppointments(
            @Param("patient") User patient,
            @Param("status") AppointmentStatus status,
            Pageable pageable
    );

    @Query("SELECT a FROM Appointment a WHERE a.doctor = :doctor " +
            "AND (:status IS NULL OR a.status = :status) " +
            "AND a.appointmentDateTime BETWEEN :startDate AND :endDate " +
            "AND a.isActive = true ORDER BY a.appointmentDateTime")
    List<Appointment> findDoctorAppointmentsInDateRange(
            @Param("doctor") Doctor doctor,
            @Param("status") AppointmentStatus status,
            @Param("startDate") LocalDateTime startDate,
            @Param("endDate") LocalDateTime endDate
    );
}