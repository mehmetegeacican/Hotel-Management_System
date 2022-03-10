package com.example.demo.reservation;



import com.example.demo.guest.Guest;
import com.example.demo.hotel.Hotel;

import javax.persistence.*;

@Entity
@Table
public class Reservation {
    @Id
    private long id;

    @OneToOne
    @JoinColumn(name = "guest_id",referencedColumnName = "id")
    private Guest guest;

    @OneToOne
    @JoinColumn(name = "hotel_id",referencedColumnName = "id")
    private Hotel hotel;

    public Reservation(long id, Guest guest, Hotel hotel) {
        this.id = id;
        this.guest = guest;
        this.hotel = hotel;
    }

    public Reservation(Guest guest, Hotel hotel) {
        this.guest = guest;
        this.hotel = hotel;
    }

    public Reservation() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Guest getGuest() {
        return guest;
    }

    public void setGuest(Guest guest) {
        this.guest = guest;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", guest=" + guest +
                ", hotel=" + hotel +
                '}';
    }
}
