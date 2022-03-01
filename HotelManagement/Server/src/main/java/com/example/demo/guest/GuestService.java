package com.example.demo.guest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class GuestService {
    private final GuestRepository guestRepository;

    @Autowired
    public GuestService(GuestRepository guestRepository) {this.guestRepository = guestRepository;}

    public List<Guest> getGuests(){return guestRepository.findAll();}

    public void addNewGuest(Guest guest) {
        Optional<Guest> guestByEmail = guestRepository
                .findGuestByEmail(guest.getEmail());
        if(guestByEmail.isPresent()){
            throw new IllegalStateException("Email is already being used");
        }

        guestRepository.save(guest);

        System.out.println(guest);
    }

    public void deleteGuest(Long id) {
        boolean exists = guestRepository.existsById(id);
        if(exists){
            guestRepository.deleteById(id);
        }
        else{
            throw new IllegalStateException("Guest with id" + id + "does not exist");
        }
    }

    public void updateGuest(Long guestId,Guest editedGuest) {

        boolean exists = guestRepository.existsById(guestId);
        if(exists){
            if(Objects.equals(guestId,editedGuest.getId())){
                Guest guest = guestRepository.getById(guestId);
                if(editedGuest.getName() != null && editedGuest.getName().length() > 0 && !Objects.equals(guest.getName(),editedGuest.getName())){
                    guest.setName(editedGuest.getName());
                }
                if(editedGuest.getEmail() != null && editedGuest.getEmail().length() > 0){
                    Optional<Guest> guestOptional = guestRepository.findGuestByEmail(editedGuest.getEmail());
                    if(guestOptional.isPresent()){
                        throw new IllegalStateException("Email already taken!");
                    }
                    guest.setEmail(editedGuest.getEmail());
                }
                if(editedGuest.getCountry()!= null && editedGuest.getCountry().length() > 0 && !Objects.equals(guest.getCountry(),editedGuest.getCountry())){
                    guest.setCountry(editedGuest.getCountry());
                }
                System.out.println(guest.toString());
            }
            else{
                throw new IllegalStateException("THE BODY ID AND REQUEST ID DOES NOT MATCH");
            }
        }
        else{
            throw new IllegalStateException("Guest with id " + guestId + " does not exist");
        }


    }
}
