package spring.eventsapi.Models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class User {
	
    
    @Id
    @GeneratedValue
	@Column(name="id")
    private int id;

	@Column(name="username")
    private String username;
    
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
    
    @ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();
    
    public User() {
        //empty constructor
    }


    public User(String email, String username, String password, String nameUser, String surname, String cardNum,
     String sex, String idPassport, String phoneNum, Nationality nationality) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.nameUser = nameUser;
        this.surname = surname;
        this.cardNum = cardNum;
        this.sex = sex;
        this.idPassport = idPassport;
        this.phoneNum = phoneNum;
        this.nationality = nationality;
    }

    public User(String email, String username, String password) {
        this.email = username;
        this.username = email;
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
        return this.id;
    }

    public void setIdUser(int id) {
        this.id = id;
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

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return this.username;
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

    public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

    @Override
    public String toString() {
        return 
        getNameUser() + " " + getSurname();          
    }

   
}