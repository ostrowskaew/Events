package spring.eventsapi.Models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Events")
public class Event {
	
	@Id
	@GeneratedValue
	@Column(name="idEvent")
	private int idEvent;
	
	@Column(name="nameEvent")
	private String nameEvent;
	
	@Column(name="dateStart")
	private String dateStart;

	@Column(name="dateEnd")
	private String dateEnd;

	@Column(name="meetingPlace")
	private String meetingPlace;

	@Column(name="notIncluded")
	private String notIncluded;

	@Column(name="included")
	private String included;	

	@Column(name="numPlaces")
	private int numPlaces;

	@Column(name="schedule")
	private String schedule;

	@Column(name="description")
	private String description;
	


	public Event() {
	}


	public Event(String nameEvent, String dateStart, String dateEnd, String meetingPlace, 
	String notIncluded, String included, int numPlaces, String schedule, String description) {
		this.nameEvent = nameEvent;
		this.dateStart = dateStart;
		this.dateEnd = dateEnd;
		this.meetingPlace = meetingPlace;
		this.notIncluded = notIncluded;
		this.included = included;
		this.numPlaces = numPlaces;
		this.schedule = schedule;
		this.description = description;
	}



	public int getIdEvent() {
		return this.idEvent;
	}

	public void setIdEvent(int id) {
		this.idEvent = id;
	}

	public String getNameEvent() {
		return this.nameEvent;
	}

	public void setNameEvent(String name) {
		this.nameEvent = name;
	}

	public String getStringStart() {
		return this.dateStart;
	}

	public void setStringStart(String dateStart) {
		this.dateStart = dateStart;
	}

	public String getStringEnd() {
		return this.dateEnd;
	}

	public void setStringEnd(String dateEnd) {
		this.dateEnd = dateEnd;
	}

	public String getMeetingPlace() {
		return this.meetingPlace;
	}

	public void setMeetingPlace(String meetingPlace) {
		this.meetingPlace = meetingPlace;
	}

	public String getNotIncluded() {
		return this.notIncluded;
	}

	public void setNotIncluded(String notIncluded) {
		this.notIncluded = notIncluded;
	}

	public String getIncluded() {
		return this.included;
	}

	public void setIncluded(String included) {
		this.included = included;
	}

	public int getNumPlaces() {
		return this.numPlaces;
	}

	public void setNumPlaces(int numPlaces) {
		this.numPlaces = numPlaces;
	}

	public String getSchedule() {
		return this.schedule;
	}

	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}



	@Override
	public String toString() {
		return getNameEvent();							
			
	}

}