package com.practo.healthcare.service;

import com.practo.healthcare.dto.response.ClinicResponse;
import com.practo.healthcare.mapper.ClinicMapper;
import com.practo.healthcare.model.Clinic;
import com.practo.healthcare.repository.ClinicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClinicService {

    @Autowired
    private ClinicRepository clinicRepository;

    @Autowired
    private ClinicMapper clinicMapper;

    public List<ClinicResponse> getClinicsByCity(String city) {
        List<Clinic> clinics = clinicRepository.findByCityContainingIgnoreCase(city);
        return clinics.stream()
                .map(clinicMapper::toResponse)
                .collect(Collectors.toList());
    }

    public List<String> getAllCities() {
        return clinicRepository.findAllCities();
    }
}
