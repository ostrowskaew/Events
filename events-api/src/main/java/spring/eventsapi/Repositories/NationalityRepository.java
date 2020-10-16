package spring.eventsapi.Repositories;

import spring.eventsapi.Nationality;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface NationalityRepository extends CrudRepository<Nationality, String> {

	public List<Nationality> findByCoutry(String name);

}