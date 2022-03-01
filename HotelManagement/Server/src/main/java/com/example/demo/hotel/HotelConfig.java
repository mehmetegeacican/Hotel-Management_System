/*
package com.example.demo.hotel;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Configuration
public class HotelConfig {
    @Bean
    CommandLineRunner commandLineRunner(HotelRepository repository){
        ArrayList<Hotel> a = new ArrayList<>();
        Hotel red_pal = new Hotel(
                "Red Palace",
                "New York,NY"
        );
        Hotel blue_pal = new Hotel(
                "Blue Palace",
                "New York,NY"
        );
        a.add(red_pal);
        a.add(blue_pal);
        return args -> {
            repository.saveAll(a);
        };

    }
}

 */
