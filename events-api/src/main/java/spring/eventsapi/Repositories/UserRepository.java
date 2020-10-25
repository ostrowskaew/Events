package spring.eventsapi.Repositories;

import spring.eventsapi.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
	
    public Long deleteByEmail(String email);
}