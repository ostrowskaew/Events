package spring.eventsapi.Repositories;

import spring.eventsapi.Models.Reservation;

import org.springframework.data.repository.CrudRepository;

public interface ReservationRepository extends CrudRepository<Reservation, Integer> {

}