package com.example.demo.hotel;

import javax.persistence.*;

@Entity
@Table
public class Hotel {
    //properties
    @Id
    @SequenceGenerator(
            name = "hotel_sequence",
            sequenceName = "hotel_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "hotel_sequence"
    )
    private long id;
    @Column(name = "hotel_name")
    private String hotelname;
    @Column(name = "location")
    private String location;
    //Constructors
    // Null
    public Hotel() {
    }
    //All
    public Hotel(long id, String hotel_name, String location) {
        this.id = id;
        this.hotelname = hotel_name;
        this.location = location;
    }
    //Without id
    public Hotel(String hotel_name, String location) {
        this.hotelname = hotel_name;
        this.location = location;
    }
    //Getters and Setters
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getHotel_name() {
        return hotelname;
    }
    public void setHotel_name(String hotel_name) {
        this.hotelname = hotel_name;
    }
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    //toString

    @Override
    public String toString() {
        return "Hotel{" +
                "id=" + id +
                ", hotelname='" + hotelname + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}
