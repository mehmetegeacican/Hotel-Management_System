package com.example.demo.reservation;



import com.example.demo.guest.Guest;
import com.example.demo.hotel.Hotel;
import com.example.demo.room.Room;

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
    @JoinColumn(name = "room_id",referencedColumnName = "id")
    private Room room;

    public Reservation(long id, Guest guest, Room room) {
        this.id = id;
        this.guest = guest;
        this.room = room;
    }

    public Reservation(Guest guest, Room room) {
        this.guest = guest;
        this.room = room;
    }

    public Reservation() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Guest getGuest() {
        return guest;
    }

    public void setGuest(Guest guest) {
        this.guest = guest;
    }


    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", guest=" + guest +
                ", room=" + room +
                '}';
    }
}
