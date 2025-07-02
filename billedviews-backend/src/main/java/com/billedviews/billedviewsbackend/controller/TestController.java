package com.billedviews.billedviewsbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "*")
public class TestController {


    @GetMapping("/echo/{message}")
    public ResponseEntity<?> echoGet(@PathVariable String message) {
        return ResponseEntity.ok(new EchoResponse(message));
    }

    // Simple response class
    public static class EchoResponse {
        public String echo;

        public EchoResponse(String message) {
            this.echo = message;
        }
    }
} 