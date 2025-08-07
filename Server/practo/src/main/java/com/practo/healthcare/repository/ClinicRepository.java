package com.practo.healthcare.repository;

import com.practo.healthcare.model.Clinic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClinicRepository extends JpaRepository<Clinic, Long> {

    @Query("SELECT c FROM Clinic c WHERE LOWER(c.city) LIKE LOWER(CONCAT('%', :city, '%')) AND c.isActive = true")
    List<Clinic> findByCityContainingIgnoreCase(@Param("city") String city);

    @Query("SELECT DISTINCT c.city FROM Clinic c WHERE c.isActive = true ORDER BY c.city")
    List<String> findAllCities();
}
