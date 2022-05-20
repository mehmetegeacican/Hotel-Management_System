package com.example.demo.room;

import com.example.demo.hotel.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    private final RoomRepository roomRepository;
    Sort sort = Sort.unsorted();
    @Autowired
    public  RoomService(RoomRepository roomRepository){this.roomRepository = roomRepository;}

    public List<Room> getRooms(){
        final List<Room> roomList = roomRepository.findAll(Sort.by("hotel.hotelname").ascending());

        return roomList;}
}
