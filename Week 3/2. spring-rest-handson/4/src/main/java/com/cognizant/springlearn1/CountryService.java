package com.cognizant.springlearn1;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn1.exception.CountryNotFoundException;

@Service
public class CountryService {

    public Country getCountry(String code) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        ArrayList<Country> countryList =
                context.getBean("countryList", ArrayList.class);

        for (Country country : countryList) {
            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }

        throw new CountryNotFoundException("Country not found");
    }
}