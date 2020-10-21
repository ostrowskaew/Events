package spring.eventsapi.Controllers;

import spring.eventsapi.Services.NationalityService;
import spring.eventsapi.Nationality;

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
public class NationalityController {
	
	@Autowired
	private NationalityService nationalityService;
	
	@RequestMapping("/nationalities")
	public List<Nationality> getAllNationalities() {
		return nationalityService.getAllNationalities();
	}
	
	@RequestMapping("/nationality/{id}")
	public Nationality getNationality(@PathVariable Number id) {
		return nationalityService.getNationality(id);
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value="/nationality")
	public void addNationality(@RequestBody Nationality nationality) {
		nationalityService.addNationality(nationality);
	}
	

	@RequestMapping(method=RequestMethod.DELETE, value="/nationality/{id}")
	public void deleteNationality(@PathVariable Number id) {
		nationalityService.deleteNationality(id);
	}
}