package com.billedviews.billedviewsbackend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.billedviews.billedviewsbackend.models.WaitlistEntry;
import com.billedviews.billedviewsbackend.repository.WaitlistEntryRepository;

@Service
@Transactional
public class WaitlistService {

    private static final Logger logger = LoggerFactory.getLogger(WaitlistService.class);

    private final WaitlistEntryRepository waitlistEntryRepository;

    @Autowired
    public WaitlistService(WaitlistEntryRepository waitlistEntryRepository) {
        this.waitlistEntryRepository = waitlistEntryRepository;
    }

    /**
     * Add a new entry to the waitlist
     * @param email the email address (required)
     * @param phoneNumber the phone number (optional)
     * @return the saved waitlist entry
     * @throws IllegalArgumentException if email already exists
     */
    public WaitlistEntry addToWaitlist(String email, String phoneNumber) {
        logger.info("Attempting to add to waitlist: email={}, phoneNumber={}", email, phoneNumber);

        // Check if email already exists
        if (waitlistEntryRepository.existsByEmail(email)) {
            logger.warn("Email already exists in waitlist: {}", email);
            throw new IllegalArgumentException("Email already exists in waitlist");
        }

        // Create and save new waitlist entry
        WaitlistEntry waitlistEntry = new WaitlistEntry(email, phoneNumber);
        WaitlistEntry savedEntry = waitlistEntryRepository.save(waitlistEntry);
        
        logger.info("Successfully added to waitlist: id={}, email={}", savedEntry.getId(), savedEntry.getEmail());
        return savedEntry;
    }
} 