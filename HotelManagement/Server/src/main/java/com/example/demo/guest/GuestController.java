package com.example.demo.guest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "/api/guests")
public class GuestController {

    @Autowired
    private GuestService guestService;

    @GetMapping
    public List<Guest> getGuests(){
        List<Guest> guests = guestService.getGuests();
        System.out.println(guests);
        return guests;
    }
    @Transactional
    @PutMapping(path = "{guestId}")
    public void updateGuest(
            @PathVariable("guestId") Long guestId,
            @RequestBody Guest editedGuest){
        guestService.updateGuest(guestId,editedGuest);
    }

    @PostMapping
    public void registerGuest(@RequestBody Guest guest){
        guestService.addNewGuest(guest);
    }

    @DeleteMapping(path = "{guestId}")
    public void deleteGuest(@PathVariable("guestId") Long id){
        guestService.deleteGuest(id);
    }
}
