package spring.eventsapi.Controllers;

import spring.eventsapi.Models.EventEs;
import spring.eventsapi.Services.EventEsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EventEsController {
	
	@Autowired
	private EventEsService eventService;
	
	@RequestMapping("/eventsEs")
	public List<EventEs> getAllEventEss() {
		return eventService.getAllEventEss();
	}
	
	@RequestMapping("/eventsEs/{id}")
	public EventEs getEventEs(@PathVariable int id) {
		return eventService.getEventEs(id);
	}
	

	@RequestMapping(method=RequestMethod.POST, value="/eventsEs")
	public void addEventEs(@RequestBody EventEs event) {
		eventService.addEventEs(event);
	}

	@RequestMapping("/eventsEs/byname/{term}")
	public List<EventEs> getEventEsByTitle(@PathVariable String term) {
		return eventService.getEventEsByName(term);
	}
	
	
	@RequestMapping(method=RequestMethod.DELETE, value="/eventsEs/{id}")
	public void deleteEventEs(@PathVariable int id) {
		eventService.deleteEventEs(id);
	}

	
}