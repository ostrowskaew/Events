package spring.eventsapi.Controllers;

import spring.eventsapi.Services.ReservationService;
import spring.eventsapi.Event;
import spring.eventsapi.Reservation;
import spring.eventsapi.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReservationController {
	
	@Autowired
	private ReservationService reservationService;
	
	@RequestMapping("/reservations")
	public List<Reservation> getAllReservations() {
		return reservationService.getAllReservations();
	}
	
	@RequestMapping("/reservation/{id}")
	public Reservation getReservation(@PathVariable int id) {
		return reservationService.getReservation(id);
	}
	
	
    @RequestMapping(method=RequestMethod.POST, value="/reservations/{eventId}/{userId}")
	public void addReservation(@RequestBody Reservation reservation, @PathVariable int eventId, @PathVariable int userId) {
        reservation.setEvent(new Event(eventId,"",null,null,"","","",0,"",""));
        reservation.setUser(new User(userId,"","","","","","",null));
		reservationService.addReservation(reservation);
	}
	

	@RequestMapping(method=RequestMethod.DELETE, value="/reservation/{id}")
	public void deleteReservation(@PathVariable int id) {
		reservationService.deleteReservation(id);
	}
}