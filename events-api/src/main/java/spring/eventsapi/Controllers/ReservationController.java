package spring.eventsapi.Controllers;

import spring.eventsapi.Services.EventService;
import spring.eventsapi.Services.ReservationService;
import spring.eventsapi.Services.UserService;
import spring.eventsapi.Reservation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ReservationController {
	
	@Autowired
	private ReservationService reservationService;

	@Autowired
	private UserService userService;

	@Autowired 
	private EventService eventService;
	
	@RequestMapping("/reservations")
	public List<Reservation> getAllReservations() {
		return reservationService.getAllReservations();
	}
	
	@RequestMapping("/reservation/{id}")
	public Reservation getReservation(@PathVariable int id) {
		return reservationService.getReservation(id);
	}
	
	
    @RequestMapping(method=RequestMethod.POST, value="/reservations/{eventId}/{userId}")
	public void addReservation(@RequestBody Reservation reservation, @PathVariable int eventId, @PathVariable String userId) {
        reservation.setEvent(eventService.getEvent(eventId));
        reservation.setUser(userService.getUser(userId));
		reservationService.addReservation(reservation);
	}
	

	@RequestMapping(method=RequestMethod.DELETE, value="/reservation/{id}")
	public void deleteReservation(@PathVariable int id) {
		reservationService.deleteReservation(id);
	}
}