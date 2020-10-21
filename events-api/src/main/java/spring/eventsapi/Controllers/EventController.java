package spring.eventsapi.Controllers;

import spring.eventsapi.Event;
import spring.eventsapi.Services.EventService;

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
public class EventController {
	
	@Autowired
	private EventService eventService;
	
	@RequestMapping("/events")
	public List<Event> getAllEvents() {
		return eventService.getAllEvents();
	}
	
	@RequestMapping("/events/{id}")
	public Event getEvent(@PathVariable Number id) {
		return eventService.getEvent(id);
	}
	

	@RequestMapping(method=RequestMethod.POST, value="/events")
	public void addEvent(@RequestBody Event event) {
		eventService.addEvent(event);
	}

	@RequestMapping("/events/byname/{term}")
	public List<Event> getEventByTitle(@PathVariable String term) {
		return eventService.getEventByName(term);
	}
	
	
	@RequestMapping(method=RequestMethod.DELETE, value="/events/{id}")
	public void deleteEvent(@PathVariable Number id) {
		eventService.deleteEvent(id);
	}
}