package spring.eventsapi.Controllers;

import spring.eventsapi.Nationality;
import spring.eventsapi.User;
import spring.eventsapi.Services.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/users")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@RequestMapping("/users/{id}")
	public User getUser(@PathVariable Number id) {
		return userService.getUser(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/users/country/{countryId}/")
	public void addUser(@RequestBody User user, @PathVariable Number countryId) {
		user.setNationality(new Nationality(countryId,""));
		userService.addUser(user);
	}
	
	
	@RequestMapping(method=RequestMethod.DELETE, value="/users/{id}")
	public void deleteUser(@PathVariable Number id) {
		userService.deleteUser(id);
	}
}