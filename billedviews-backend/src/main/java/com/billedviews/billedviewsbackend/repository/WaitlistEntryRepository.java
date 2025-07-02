package com.billedviews.billedviewsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.billedviews.billedviewsbackend.models.WaitlistEntry;

@Repository
public interface WaitlistEntryRepository extends JpaRepository<WaitlistEntry, Long> {
    
    /**
     * Check if email already exists in waitlist
     * @param email the email to check
     * @return true if email exists, false otherwise
     */
    boolean existsByEmail(String email);
} 