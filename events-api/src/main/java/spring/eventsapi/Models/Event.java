package spring.eventsapi.Models;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Events")
public class Event {

	@Id
	@GeneratedValue
	@Column(name = "idEvent")
	private int idEvent;

	@Column(name = "nameEvent")
	private String nameEvent;

	@Column(name = "dateStart")
	private Date dateStart;

	@Column(name="dateEnd")
	private Date dateEnd;

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

	@Column(name="price")
	private int price;
	
	@Column(name="imageId")
	private int imageId;

	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "eventEs", referencedColumnName = "idEvent")
	private EventEs eventEs;
	

	public Event() {
	}


	public Event(String nameEvent,int price, Date dateStart, Date dateEnd, String meetingPlace,
	String notIncluded, String included, int numPlaces, String schedule, String description, int imageId) {
		this.nameEvent = nameEvent;
		this.dateStart = dateStart;
		this.dateEnd = dateEnd;
		this.price = price;
		this.meetingPlace = meetingPlace;
		this.notIncluded = notIncluded;
		this.included = included;
		this.numPlaces = numPlaces;
		this.schedule = schedule;
		this.description = description;
		this.imageId = imageId;
		this.eventEs = new EventEs();
		this.eventEs.setIdEvent(this.idEvent);
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


	public int getPrice() {
		return this.price;
	}

	public void setPrice(int price) {
		this.price = price;
	}


	public Date getDateStart() {
		return this.dateStart;
	}

	public void seDateStart(Date dateStart) {
		this.dateStart = dateStart;
	}

	public Date getDateEnd() {
		return this.dateEnd;
	}

	public void setDateEnd(Date dateEnd) {
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

	public int getImageId() {
		return this.imageId;
	}

	public void setImageId(int image) {
		this.imageId = image;
	}


	public EventEs getEventEs() {
		return this.eventEs;
	}

	public void setEventEs(EventEs eventEs) {
		this.eventEs = eventEs;
	}


	@Override
	public String toString() {
		return getNameEvent();							
			
	}

}