package spring.eventsapi.Controllers;

import spring.eventsapi.Models.Event;
import spring.eventsapi.Models.EventEs;
import spring.eventsapi.Services.EventEsService;
import spring.eventsapi.Services.EventService;

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
public class EventController {
	
	@Autowired
	private EventService eventService;

	@Autowired
	private EventEsService eventEsService;
	
	@RequestMapping("/events")
	public List<Event> getAllEvents() {
		return eventService.getAllEvents();
	}
	
	@RequestMapping("/events/{id}")
	public Event getEvent(@PathVariable int id) {
		return eventService.getEvent(id);
	}
	

	@RequestMapping(method=RequestMethod.POST, value="/events")
	public int addEvent(@RequestBody Event event) {
		EventEs eventEs = new EventEs();
		int messageId = eventEsService.addEventEs(eventEs).getIdEvent();
     	event.setEventEs(eventEsService.getEventEs(messageId));
		eventService.addEvent(event).getIdEvent();
		 
		return messageId;
	}

	@RequestMapping(method=RequestMethod.POST, value="/events/edit")
	public int editEvent(@RequestBody Event event) {
		eventService.addEvent(event);
		 int messageId = 1;
		return messageId;
	}

	@RequestMapping("/events/byname/{term}")
	public List<Event> getEventByTitle(@PathVariable String term) {
		return eventService.getEventByName(term);
	}
	
	
	@RequestMapping(method=RequestMethod.DELETE, value="/events/{id}")
	public void deleteEvent(@PathVariable int id) {
		eventService.deleteEvent(id);
	}

	@RequestMapping("/events/bytitle/{term}")
	public List<Event> getMovieByTitle(@PathVariable String term) {
		return eventService.getEventByName(term);
	}
	
}