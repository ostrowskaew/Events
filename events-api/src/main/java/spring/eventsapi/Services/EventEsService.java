package spring.eventsapi.Services;

import spring.eventsapi.Repositories.EventEsRepository;
import spring.eventsapi.Models.EventEs;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventEsService {
	
    @Autowired
	private EventEsRepository eventRepository;
	
	public List<EventEs> getAllEventEss(){
		List<EventEs> events = new ArrayList<>();
		eventRepository.findAll().forEach(events::add);
		return events;
	}
	
	public EventEs getEventEs(int id) {
		Optional<EventEs> optEventEs = eventRepository.findById(id);
		if (optEventEs.isPresent()){
		    EventEs pers = optEventEs.get();
		    return pers;
		}
		else{
			return null;
		}
	}
	
	public EventEs addEventEs(EventEs event) {
		return eventRepository.save(event);
	}

	
	public void deleteEventEs(int id) {
		eventRepository.deleteById(id);
	}

	public List<EventEs> getEventEsByName(String name) {
		return eventRepository.findByNameEventIgnoreCaseContaining(name);
	}

	
}
