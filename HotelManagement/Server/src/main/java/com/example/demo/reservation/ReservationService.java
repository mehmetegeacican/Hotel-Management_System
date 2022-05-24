package com.example.demo.reservation;

import com.example.demo.guest.Guest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {
    private final ReservationRepository reservationRepository;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository){ this.reservationRepository = reservationRepository; }

    public List<Reservation> getReservations(){ return reservationRepository.findAll();}

    public void deleteReservations(Long id) {
        boolean exists = reservationRepository.existsById(id);
        if(exists){
            reservationRepository.deleteById(id);
        }
        else{
            throw new IllegalStateException("Reservation with id" + id + "does not exist");
        }
    }

    public void addNewReservation(Reservation reservation) {
        Optional<Reservation> reservationByRoom = reservationRepository
                .findReservationByRoomNo(reservation.getRoom().getRoom_no());
        if(reservationByRoom.isPresent()){
            throw new IllegalStateException("Room is already being used");
        }
        reservationRepository.save(reservation);
    }
}
