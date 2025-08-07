package com.practo.healthcare.dto.response;

import com.practo.healthcare.model.UserType;
import lombok.Data;

@Data
public class AuthResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private UserType userType;

    public AuthResponse(String token, Long id, String email, String firstName, String lastName, UserType userType) {
        this.token = token;
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userType = userType;
    }

}