package io.bootapp;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


@Entity
@Table(name="Nationalities")
public class Nationality {
	
	@Id
	@Column(name="idNationality")
	private Number idNationality;
	
	@Column(name="country")
	private String country;
        

    public Nationality() {
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