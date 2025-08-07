package com.practo.healthcare.repository;

import com.practo.healthcare.model.Doctor;
import com.practo.healthcare.model.Gender;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    @Query("SELECT d FROM Doctor d JOIN d.clinics dc JOIN dc.clinic c " +
            "WHERE (:city IS NULL OR LOWER(c.city) LIKE LOWER(CONCAT('%', :city, '%'))) " +
            "AND (:specialization IS NULL OR LOWER(d.specialization) LIKE LOWER(CONCAT('%', :specialization, '%'))) " +
            "AND (:gender IS NULL OR d.gender = :gender) " +
            "AND (:minExperience IS NULL OR d.experienceYears >= :minExperience) " +
            "AND (:minRating IS NULL OR d.rating >= :minRating) " +
            "AND (:isAvailableToday IS NULL OR d.isAvailableToday = :isAvailableToday) " +
            "AND d.isActive = true AND d.isVerified = true")
    Page<Doctor> findDoctorsWithFilters(
            @Param("city") String city,
            @Param("specialization") String specialization,
            @Param("gender") Gender gender,
            @Param("minExperience") Integer minExperience,
            @Param("minRating") BigDecimal minRating,
            @Param("isAvailableToday") Boolean isAvailableToday,
            Pageable pageable
    );

    @Query("SELECT DISTINCT d.specialization FROM Doctor d WHERE d.isActive = true ORDER BY d.specialization")
    java.util.List<String> findAllSpecializations();
}