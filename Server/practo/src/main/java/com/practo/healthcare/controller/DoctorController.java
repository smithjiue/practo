package com.practo.healthcare.controller;

import com.practo.healthcare.dto.response.DoctorResponse;
import com.practo.healthcare.dto.request.DoctorSearchRequest;
import com.practo.healthcare.service.DoctorService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctors")
@Tag(name = "Doctors", description = "Doctor management APIs")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping("/search")
    @Operation(summary = "Search doctors", description = "Search doctors with filters")
    public ResponseEntity<Page<DoctorResponse>> searchDoctors(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String specialization,
            @RequestParam(required = false) String gender,
            @RequestParam(required = false) Integer minExperience,
            @RequestParam(required = false) Double minRating,
            @RequestParam(required = false) Boolean isAvailableToday,
            @RequestParam(defaultValue = "rating") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDirection,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        DoctorSearchRequest searchRequest = new DoctorSearchRequest();
        searchRequest.setCity(city);
        searchRequest.setSpecialization(specialization);
        searchRequest.setMinExperience(minExperience);
        searchRequest.setIsAvailableToday(isAvailableToday);
        searchRequest.setSortBy(sortBy);
        searchRequest.setSortDirection(sortDirection);
        searchRequest.setPage(page);
        searchRequest.setSize(size);

        Page<DoctorResponse> doctors = doctorService.searchDoctors(searchRequest);
        return ResponseEntity.ok(doctors);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get doctor by ID", description = "Get doctor details by ID")
    public ResponseEntity<DoctorResponse> getDoctorById(@PathVariable Long id) {
        return doctorService.getDoctorById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}