package spring.eventsapi.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spring.eventsapi.Models.UserData;



@Repository
public interface UserDataRepository extends JpaRepository<UserData, Integer> {
	
}

