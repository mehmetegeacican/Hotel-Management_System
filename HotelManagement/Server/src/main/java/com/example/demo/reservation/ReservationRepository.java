package com.example.demo.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    @Query("SELECT s FROM Reservation s WHERE s.room.room_no= ?1")
    Optional<Reservation> findReservationByRoomNo(String email);
}
