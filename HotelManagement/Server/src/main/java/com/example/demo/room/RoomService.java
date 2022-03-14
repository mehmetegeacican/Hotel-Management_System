package com.example.demo.room;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    private final RoomRepository roomRepository;

    @Autowired
    public  RoomService(RoomRepository roomRepository){this.roomRepository = roomRepository;}

    public List<Room> getRooms(){return roomRepository.findAll();}
}
