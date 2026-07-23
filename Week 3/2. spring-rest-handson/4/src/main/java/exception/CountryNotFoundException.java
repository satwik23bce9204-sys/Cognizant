package com.cognizant.springlearn1.exception;

public class CountryNotFoundException extends RuntimeException {

    public CountryNotFoundException(String message) {
        super(message);
    }
}