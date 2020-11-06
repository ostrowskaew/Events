package spring.eventsapi.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import spring.eventsapi.Models.UserData;
import spring.eventsapi.Services.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserDataController {
	
	@Autowired
	private UserDataService userService;
	
	@Autowired
	private NationalityService nationalityService;
	
	@RequestMapping("/usersData")
	public List<UserData> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@RequestMapping("/usersData/{id}")
	public UserData getUser(@PathVariable int id) {
		return userService.getUser(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/usersData/{countryId}")
	public void addUser(@RequestBody UserData user, @PathVariable int countryId) {
        user.setNationality(nationalityService.getNationality(countryId));
		userService.addUser(user);
	}
	
	
	@RequestMapping(method=RequestMethod.DELETE, value="/usersData/{id}")
	public void deleteUser(@PathVariable int id) {
		userService.deleteUser(id);
	}
}