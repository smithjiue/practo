package com.practo.healthcare.mapper;

import com.practo.healthcare.dto.response.ClinicResponse;
import com.practo.healthcare.model.Clinic;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class ClinicMapper {

    public ClinicResponse toResponse(Clinic clinic) {
        return toResponse(clinic, null);
    }

    public ClinicResponse toResponse(Clinic clinic, BigDecimal consultationFee) {
        ClinicResponse response = new ClinicResponse();
        response.setId(clinic.getId());
        response.setName(clinic.getName());
        response.setAddress(clinic.getAddress());
        response.setCity(clinic.getCity());
        response.setState(clinic.getState());
        response.setPincode(clinic.getPincode());
        response.setPhoneNumber(clinic.getPhoneNumber());
        response.setConsultationFee(consultationFee);
        return response;
    }
}