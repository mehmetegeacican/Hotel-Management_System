package com.example.demo.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    private final ReservationRepository reservationRepository;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository){ this.reservationRepository = reservationRepository; }

    public List<Reservation> getReservations(){ return reservationRepository.findAll();}
}
