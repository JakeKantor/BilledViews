package com.billedviews.billedviewsbackend.controller.waitlist;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.billedviews.billedviewsbackend.models.waitlist.WaitlistEntry;
import com.billedviews.billedviewsbackend.service.waitlist.WaitlistService;

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

        // Accepts E.164 format as well as common US formatted numbers like (123) 456-7890
        @Pattern(
            regexp = "^[+]?[()]?[0-9]{1,4}[)]?[-\\s0-9]*$",
            message = "Phone number should be valid"
        )
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