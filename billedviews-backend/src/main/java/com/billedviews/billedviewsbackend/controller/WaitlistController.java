package com.billedviews.billedviewsbackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.billedviews.billedviewsbackend.models.WaitlistEntry;
import com.billedviews.billedviewsbackend.service.WaitlistService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

@RestController
@RequestMapping("/api/waitlist")
public class WaitlistController {

    private final WaitlistService waitlistService;

    public WaitlistController(WaitlistService waitlistService) {
        this.waitlistService = waitlistService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addToWaitlist(@Valid @RequestBody WaitlistRequest request) {
        try {
            WaitlistEntry savedEntry = waitlistService.addToWaitlist(request.email, request.phoneNumber);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedEntry);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        }
    }

    // Simple request class
    public static class WaitlistRequest {
        @NotBlank(message = "Email is required")
        @Email(message = "Email should be valid")
        public String email;

        @Pattern(regexp = "^[+]?[1-9]\\d{1,14}$", message = "Phone number should be valid")
        public String phoneNumber;
    }

    // Simple error response class
    public static class ErrorResponse {
        public String error;

        public ErrorResponse(String error) {
            this.error = error;
        }
    }
} 