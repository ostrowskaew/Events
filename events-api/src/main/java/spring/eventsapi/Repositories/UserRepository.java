package spring.eventsapi.Repositories;

import spring.eventsapi.Models.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
	
}