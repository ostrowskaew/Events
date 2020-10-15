package io.bootapp;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


@Entity
@Table(name="Reservations")
public class Reservation {
	
	@Id
	@Column(name="idReservation")
	private Number idReservation;

    @ManyToOne
    private User user;

    @ManyToOne
    private Event event;  


    public Reservation() {
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