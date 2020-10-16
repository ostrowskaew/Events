package spring.eventsapi.Repositories;

import spring.eventsapi.User;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {

	public List<User> findByName(String name);

}