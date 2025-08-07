package com.practo.healthcare.repository;

import com.practo.healthcare.model.Review;
import com.practo.healthcare.model.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    Page<Review> findByDoctorAndIsActiveTrue(Doctor doctor, Pageable pageable);

    @Query("SELECT AVG(r.rating) FROM Review r WHERE r.doctor = :doctor AND r.isActive = true")
    Double findAverageRatingByDoctor(@Param("doctor") Doctor doctor);

    @Query("SELECT COUNT(r) FROM Review r WHERE r.doctor = :doctor AND r.isActive = true")
    Long countReviewsByDoctor(@Param("doctor") Doctor doctor);
}