package spring.eventsapi.Repositories;

import spring.eventsapi.Event;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository<Event, String> {

	public List<Event> findByName(String name);

}