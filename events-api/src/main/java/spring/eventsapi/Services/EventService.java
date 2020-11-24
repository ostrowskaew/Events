package spring.eventsapi.Services;

import spring.eventsapi.Repositories.EventRepository;
import spring.eventsapi.Models.Event;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {
	
    @Autowired
	private EventRepository eventRepository;
	
	public List<Event> getAllEvents(){
		List<Event> events = new ArrayList<>();
		eventRepository.findAll().forEach(events::add);
		return events;
	}
	
	public Event getEvent(int id) {
		Optional<Event> optEvent = eventRepository.findById(id);
		if (optEvent.isPresent()){
		    Event pers = optEvent.get();
		    return pers;
		}
		else{
			return null;
		}
	}
	
	public void addEvent(Event event) {
		eventRepository.save(event);
	}

	
	public void deleteEvent(int id) {
		eventRepository.deleteById(id);
	}

	public List<Event> getEventByName(String name) {
		return eventRepository.findByNameEventIgnoreCaseContaining(name);
	}

	
}
