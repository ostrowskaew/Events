package spring.eventsapi.Repositories;

import spring.eventsapi.Models.Nationality;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface NationalityRepository extends CrudRepository<Nationality, Integer> {

	public List<Nationality> findByCountryIgnoreCaseContaining(String name);

}