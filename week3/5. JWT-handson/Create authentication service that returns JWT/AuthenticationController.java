package com.cognizant.springlearn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.util.JwtUtil;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate() {

        User user = new User(
                "user",
                "pwd",
                java.util.Collections.emptyList());

        String token = jwtUtil.generateToken(user.getUsername());

        return ResponseEntity.ok(new AuthenticationResponse(token));
    }
}
