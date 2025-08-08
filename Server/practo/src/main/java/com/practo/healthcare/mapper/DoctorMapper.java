package com.practo.healthcare.mapper;

import com.practo.healthcare.dto.response.DoctorResponse;
import com.practo.healthcare.model.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class DoctorMapper {

    @Autowired
    private ClinicMapper clinicMapper;

    public DoctorResponse toResponse(Doctor doctor) {
        DoctorResponse response = new DoctorResponse();
        response.setId(doctor.getId());
        response.setFirstName(doctor.getUser().getFirstName());
        response.setLastName(doctor.getUser().getLastName());
        response.setEmail(doctor.getUser().getEmail());
        response.setPhoneNumber(doctor.getUser().getPhoneNumber());
        response.setSpecialization(doctor.getSpecialization());
        response.setQualification(doctor.getQualification());
        response.setExperienceYears(doctor.getExperienceYears());
        response.setBio(doctor.getBio());
        response.setConsultationFee(doctor.getConsultationFee());
        response.setRating(doctor.getRating());
        response.setTotalReviews(doctor.getTotalReviews());
        response.setPatientStories(doctor.getPatientStories());
        response.setProfileImageUrl(doctor.getProfileImageUrl());
        response.setIsAvailableToday(doctor.getIsAvailableToday());
        response.setGender(doctor.getGender());

        if (doctor.getClinics() != null) {
            response.setClinics(doctor.getClinics().stream()
                    .map(dc -> clinicMapper.toResponse(dc.getClinic(), dc.getConsultationFee()))
                    .collect(Collectors.toList()));
        }

        return response;
    }
}