package com.petpia.backend_petpia.controller;

import com.petpia.backend_petpia.entity.User;
import com.petpia.backend_petpia.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody User user) {
        Optional<User> registeredUser = authService.register(user);
        if (registeredUser.isPresent()) {
            return ResponseEntity.ok("User registered successfully");
        } else {
            return ResponseEntity.badRequest().body("Email is already in use");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User authRequest) {
        Optional<String> token = authService.login(authRequest.getUsername(), authRequest.getPassword());
        if (token.isPresent()) {
            return ResponseEntity.ok(token.get());
        } else {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
    }

    @PostMapping("/refresh")
    public ResponseEntity<String> refresh(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(authService.refresh(token));
    }
}

class AuthRequest {
    private String username;
    private String password;

    // Getters and setters
}
