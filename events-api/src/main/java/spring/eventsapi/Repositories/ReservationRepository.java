package spring.eventsapi.Repositories;

import spring.eventsapi.Models.Reservation;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ReservationRepository extends CrudRepository<Reservation, Integer> {
    public List<Reservation> findByEventIdEvent(int idEvent);
    Long countByEventIdEvent(int idEvent);
}