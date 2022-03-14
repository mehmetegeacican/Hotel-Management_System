package com.example.demo.room;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "/api/rooms")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @GetMapping
    public List<Room> getRooms(){
        List<Room> roomList = roomService.getRooms();
        return roomList;
    }
}
