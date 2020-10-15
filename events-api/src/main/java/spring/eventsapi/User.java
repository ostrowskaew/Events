package io.bootapp;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="Users")
public class User {
	
	@Id
	@Column(name="userId")
	private Number idUser;
	
	@Column(name="nameUser")
	private String nameUser;
    
    @Column(name="surname")
	private String surname;

    @Column(name="cardNum")
	private String cardNum;

    @Column(name="sex")
	private String sex;

    @Column(name="idPassport")
	private String idPassport;
    
    @Column(name="phoneNum")
	private String phoneNum;

	@ManyToOne
	private Nationality nationality;
    

    public User() {
    }


    public Number getIdUser() {
        return this.idUser;
    }

    public void setIdUser(Number idUser) {
        this.idUser = idUser;
    }

    public String getNameUser() {
        return this.nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public String getSurname() {
        return this.surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getCardNum() {
        return this.cardNum;
    }

    public void setCardNum(String cardNum) {
        this.cardNum = cardNum;
    }

    public String getSex() {
        return this.sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getIdPassport() {
        return this.idPassport;
    }

    public void setIdPassport(String idPassport) {
        this.idPassport = idPassport;
    }

    public String getPhoneNum() {
        return this.phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public Nationality getNationality() {
        return this.nationality;
    }

    public void setNationality(Nationality nationality) {
        this.nationality = nationality;
    }


    @Override
    public String toString() {
        return 
        getNameUser() + " " + getSurname();
\      
\      
    }


    
}