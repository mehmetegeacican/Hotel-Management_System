package com.example.demo.reservation;


import com.example.demo.guest.Guest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping(path = "{reservationId}")
    public void deleteReservation(@PathVariable("reservationId") Long id){
        reservationService.deleteReservations(id);
    }

    @PostMapping
    public void registerReservation(@RequestBody Reservation reservation){
        reservationService.addNewReservation(reservation);
    }
}
