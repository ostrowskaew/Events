package spring.eventsapi.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class User {
	
    
    @Id
    @GeneratedValue
	@Column(name="idUser")
    private int idUser;

	@Column(name="email")
    private String email;
    
    @Column(name="password")
    private String password;
	
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

	@ManyToOne(optional = true)
	private Nationality nationality;
    
    public User() {
        //empty constructor
    }


    public User(String email, String password, String nameUser, String surname, String cardNum,
     String sex, String idPassport, String phoneNum, Nationality nationality) {
        this.email = email;
        this.password = password;
        this.nameUser = nameUser;
        this.surname = surname;
        this.cardNum = cardNum;
        this.sex = sex;
        this.idPassport = idPassport;
        this.phoneNum = phoneNum;
        this.nationality = nationality;
    }

    public User(String email, String password) {
        this.email = email;
        this.password = password;
        this.nameUser = "" ;
        this.surname = "";
        this.cardNum = "";
        this.sex = "";
        this.idPassport ="";
        this.phoneNum = "";
        this.nationality = null;
    }

    public int getIdUser() {
        return this.idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
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
    }

   
}