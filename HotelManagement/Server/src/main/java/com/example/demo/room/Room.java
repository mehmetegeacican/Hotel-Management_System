package com.example.demo.room;


import com.example.demo.hotel.Hotel;

import javax.persistence.*;

@Entity
@Table
public class Room {
    @Id
    private long id;
    private String type;
    private String room_no;

    @OneToOne
    @JoinColumn(name = "hotel_id",referencedColumnName = "id")
    private Hotel hotel;

    public Room() {
    }

    public Room(long id, String type, String room_no, Hotel hotel) {
        this.id = id;
        this.type = type;
        this.room_no = room_no;
        this.hotel = hotel;
    }

    public Room(String type, String room_no, Hotel hotel) {
        this.type = type;
        this.room_no = room_no;
        this.hotel = hotel;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRoom_no() {
        return room_no;
    }

    public void setRoom_no(String room_no) {
        this.room_no = room_no;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    @Override
    public String toString() {
        return "Room{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", room_no='" + room_no + '\'' +
                ", hotel=" + hotel +
                '}';
    }
}
