package com.practo.healthcare.service;

import com.practo.healthcare.dto.response.DoctorResponse;
import com.practo.healthcare.dto.request.DoctorSearchRequest;
import com.practo.healthcare.mapper.DoctorMapper;
import com.practo.healthcare.model.Doctor;
import com.practo.healthcare.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private DoctorMapper doctorMapper;

    public Page<DoctorResponse> searchDoctors(DoctorSearchRequest searchRequest) {
        Sort sort = createSort(searchRequest.getSortBy(), searchRequest.getSortDirection());
        Pageable pageable = PageRequest.of(searchRequest.getPage(), searchRequest.getSize(), sort);

        Page<Doctor> doctors = doctorRepository.findDoctorsWithFilters(
                searchRequest.getCity(),
                searchRequest.getSpecialization(),
                searchRequest.getGender(),
                searchRequest.getMinExperience(),
                searchRequest.getMinRating(),
                searchRequest.getIsAvailableToday(),
                pageable
        );

        return doctors.map(doctorMapper::toResponse);
    }

    public Optional<DoctorResponse> getDoctorById(Long id) {
        return doctorRepository.findById(id)
                .map(doctorMapper::toResponse);
    }

    public List<String> getAllSpecializations() {
        return doctorRepository.findAllSpecializations();
    }

    private Sort createSort(String sortBy, String sortDirection) {
        Sort.Direction direction = sortDirection.equalsIgnoreCase("desc") ?
                Sort.Direction.DESC : Sort.Direction.ASC;

        return switch (sortBy.toLowerCase()) {
            case "experience" -> Sort.by(direction, "experienceYears");
            case "fee" -> Sort.by(direction, "consultationFee");
            case "name" -> Sort.by(direction, "user.firstName", "user.lastName");
            default -> Sort.by(direction, "rating");
        };
    }
}