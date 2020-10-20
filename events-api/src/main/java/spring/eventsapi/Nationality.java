package spring.eventsapi;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Nationalities")
public class Nationality {
	
	@Id
	@Column(name="idNationality")
	private Number idNationality;
	
	@Column(name="country")
	private String country;
        

    public Nationality() {
        //empty constructor
    }


    public Nationality(Number idNationality, String country) {
        this.idNationality = idNationality;
        this.country = country;
    }


    public Number getIdNationality() {
        return this.idNationality;
    }

    public void setIdNationality(Number idNationality) {
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