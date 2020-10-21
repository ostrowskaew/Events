package spring.eventsapi.Services;

import spring.eventsapi.User;
import spring.eventsapi.Repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> getAllUsers(){
		List<User> users = new ArrayList<>();
		userRepository.findAll().forEach(users::add);
		return users;
	}
	
	public User getUser(Number id) {
		Optional<User> optUser = userRepository.findById(id);
		if (optUser.isPresent()){
		    User pers = optUser.get();
		    return pers;
		}
		else{
			return null;
		}
	}
	
	public void addUser(User user) {
		userRepository.save(user);
	}

	
	public void deleteUser(Number id) {
		userRepository.deleteById(id);
	}
}