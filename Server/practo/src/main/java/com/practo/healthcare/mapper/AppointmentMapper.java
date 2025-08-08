package com.practo.healthcare.mapper;

import com.practo.healthcare.dto.response.AppointmentResponse;
import com.practo.healthcare.model.Appointment;
import org.springframework.stereotype.Component;

@Component
public class AppointmentMapper {

    public AppointmentResponse toResponse(Appointment appointment) {
        AppointmentResponse response = new AppointmentResponse();
        response.setId(appointment.getId());
        response.setPatientName(appointment.getPatient().getFirstName() + " " +
                appointment.getPatient().getLastName());
        response.setDoctorName("Dr. " + appointment.getDoctor().getUser().getFirstName() + " " +
                appointment.getDoctor().getUser().getLastName());
        response.setClinicName(appointment.getClinic().getName());
        response.setClinicAddress(appointment.getClinic().getAddress());
        response.setAppointmentDateTime(appointment.getAppointmentDateTime());
        response.setStatus(appointment.getStatus());
        response.setType(appointment.getType());
        response.setConsultationFee(appointment.getConsultationFee());
        response.setSymptoms(appointment.getSymptoms());
        response.setNotes(appointment.getNotes());
        response.setPrescription(appointment.getPrescription());
        response.setCreatedAt(appointment.getCreatedAt());
        return response;
    }
}