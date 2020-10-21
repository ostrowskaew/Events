package spring.eventsapi;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="Reservations")
public class Reservation {
	
    @Id
    @GeneratedValue
	@Column(name="idReservation")
	private Number idReservation;

    @ManyToOne
    private User user;

    @ManyToOne
    private Event event;  


    public Reservation() {
        //empty constructor
    }


    public Reservation(Number idReservation, User user, Event event) {
        this.idReservation = idReservation;
        this.user = user;
        this.event = event;
    }


    public Number getIdReservation() {
        return this.idReservation;
    }

    public void setIdReservation(Number idReservation) {
        this.idReservation = idReservation;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Event getEvent() {
        return this.event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }



    @Override
    public String toString() {
        return "{" +
            " idReservation='" + getIdReservation() + "'" +
            ", user='" + getUser() + "'" +
            ", event='" + getEvent() + "'" +
            "}";
    }

    
}