package spring.eventsapi.Repositories;

import spring.eventsapi.Reservation;

import org.springframework.data.repository.CrudRepository;

public interface ReservationRepository extends CrudRepository<Reservation, String> {

}