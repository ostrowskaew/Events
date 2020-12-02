package spring.eventsapi.Repositories;

import spring.eventsapi.Models.EventEs;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventEsRepository extends CrudRepository<EventEs, Integer> {

	public List<EventEs> findByNameEventIgnoreCaseContaining(String name);
}