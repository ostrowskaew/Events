package spring.eventsapi.Repositories;

import spring.eventsapi.Event;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends CrudRepository<Event, Integer> {

	public List<Event> findByNameEventIgnoreCaseContaining(String name);

}