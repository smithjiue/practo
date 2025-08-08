package com.practo.healthcare.controller;

import com.practo.healthcare.service.DoctorService;
import com.practo.healthcare.service.ClinicService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Tag(name = "Utilities", description = "Utility APIs for dropdowns and filters")
public class UtilityController {

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private ClinicService clinicService;

    @GetMapping("/specializations")
    @Operation(summary = "Get all specializations", description = "Get list of all doctor specializations")
    public ResponseEntity<List<String>> getAllSpecializations() {
        List<String> specializations = doctorService.getAllSpecializations();
        return ResponseEntity.ok(specializations);
    }

    @GetMapping("/cities")
    @Operation(summary = "Get all cities", description = "Get list of all cities with clinics")
    public ResponseEntity<List<String>> getAllCities() {
        List<String> cities = clinicService.getAllCities();
        return ResponseEntity.ok(cities);
    }
}