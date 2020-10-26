package spring.eventsapi.Services;

import spring.eventsapi.Repositories.ReservationRepository;
import spring.eventsapi.Models.Reservation;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {
	
	@Autowired
	private ReservationRepository reservationRepository;
	
	public List<Reservation> getAllReservations(){
		List<Reservation> reservations = new ArrayList<>();
		reservationRepository.findAll().forEach(reservations::add);
		return reservations;
	}
	
	public Reservation getReservation(int id) {
		Optional<Reservation> optReservation = reservationRepository.findById(id);
		if (optReservation.isPresent()){
		    Reservation pers = optReservation.get();
		    return pers;
		}
		else{
			return null;
		}
	}
	
	public void addReservation(Reservation reservation) {
		reservationRepository.save(reservation);
	}
	
	
	public void deleteReservation(int id) {
		reservationRepository.deleteById(id);
	}
}