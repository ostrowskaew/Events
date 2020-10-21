package spring.eventsapi;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Nationalities")
public class Nationality {
	
    @Id
    @GeneratedValue
	@Column(name="idNationality")
	private int idNationality;
	
	@Column(name="country")
	private String country;
        

    public Nationality() {
        //empty constructor
    }


    public Nationality(int idNationality, String country) {
        this.idNationality = idNationality;
        this.country = country;
    }


    public int getIdNationality() {
        return this.idNationality;
    }

    public void setIdNationality(int idNationality) {
        this.idNationality = idNationality;
    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }


    @Override
    public String toString() {
        return getCountry();
    }

    
}