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
	private int idReservation;

    @ManyToOne
    private User user;

    @ManyToOne
    private Event event;  

    private boolean payed;

    public Reservation() {
        //empty constructor
    }


    public Reservation(boolean payed, User user, Event event) {
        this.user = user;
        this.event = event;
        this.payed = payed;
    }


    public int getIdReservation() {
        return this.idReservation;
    }

    public void setIdReservation(int idReservation) {
        this.idReservation = idReservation;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public boolean getPayed() {
        return this.payed;
    }

    public void setPayed(boolean payed) {
        this.payed = payed;
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