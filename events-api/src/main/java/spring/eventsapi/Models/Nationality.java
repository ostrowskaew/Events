package spring.eventsapi.Models;


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
    
    @Column(name="countrySp")
    private String countrySp;
        

    public Nationality() {
        //empty constructor
    }



    public Nationality(String country, String countrySp) {
        this.country = country;
        this.countrySp = countrySp;
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


    public String getCountrySp() {
        return this.countrySp;
    }

    public void setCountrySp(String countrySp) {
        this.countrySp = countrySp;
    }


    
}