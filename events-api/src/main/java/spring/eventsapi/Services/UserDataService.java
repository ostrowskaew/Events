package spring.eventsapi.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.eventsapi.Models.UserData;
import spring.eventsapi.Repositories.UserDataRepository;

@Service
public class UserDataService {

    @Autowired
    private UserDataRepository userDataRepository;

    public List<UserData> getAllUsers() {
        List<UserData> users = new ArrayList<>();
        userDataRepository.findAll().forEach(users::add);
		return users;
	}
	
	public UserData getUser(int id) {
		Optional<UserData> optUser = userDataRepository.findById(id);
		if (optUser.isPresent()){
		    UserData pers = optUser.get();
		    return pers;
		}
		else{
			return null;
		}
	}
	
	public void addUser(UserData user) {
		userDataRepository.save(user);
	}

	
	public void deleteUser(int id) {
		userDataRepository.deleteById(id);
	}
}
