package com.practo.healthcare.service;

import com.practo.healthcare.dto.request.AuthRequest;
import com.practo.healthcare.dto.response.AuthResponse;
import com.practo.healthcare.dto.request.RegisterRequest;
import com.practo.healthcare.model.Role;
import com.practo.healthcare.model.User;
import com.practo.healthcare.repository.UserRepository;
import com.practo.healthcare.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    public AuthResponse authenticateUser(AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken((User) authentication.getPrincipal());

        User user = (User) authentication.getPrincipal();
        return new AuthResponse(jwt, user.getId(), user.getEmail(), user.getFirstName(),
                user.getLastName(), user.getUserType());
    }

    @Transactional
    public String registerUser(RegisterRequest registerRequest) {
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new RuntimeException("Error: Email is already in use!");
        }

        if (registerRequest.getPhoneNumber() != null &&
                userRepository.existsByPhoneNumber(registerRequest.getPhoneNumber())) {
            throw new RuntimeException("Error: Phone number is already in use!");
        }

        // Create new user account
        User user = new User();
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setEmail(registerRequest.getEmail());
        user.setPhoneNumber(registerRequest.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setUserType(registerRequest.getUserType());

        // Set default roles based on user type
        Set<Role> roles = Set.of(Role.USER);
        if (registerRequest.getUserType().name().equals("DOCTOR")) {
            roles = Set.of(Role.USER, Role.DOCTOR);
        }
        user.setRoles(roles);

        userRepository.save(user);
        return "User registered successfully!";
    }
}