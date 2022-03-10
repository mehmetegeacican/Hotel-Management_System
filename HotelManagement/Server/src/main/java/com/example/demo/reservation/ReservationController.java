package com.example.demo.reservation;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "/api/reservations")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @GetMapping
    public List<Reservation> getReservations(){
        List<Reservation> res = reservationService.getReservations();
        return res;
    }
}
