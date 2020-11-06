import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../database-components/user/user';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

 private usersUrl = 'http://localhost:8080/usersData';



  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.usersUrl);
  }

    getUser(id: number): Observable<Object> {
       const url = `${this.usersUrl}/${id}`;
       return this.http.get<User>(url);
    }


  /** POST: add a new user to the server */
    addUser(user: Object, idCountry : number): Observable<Object> {
      const url = `${this.usersUrl}/${idCountry}`;
      return this.http.post(url, user);
    }


    deleteUser(idUser: number): Observable<any> {
      const url = `${this.usersUrl}/${idUser}`;
      return this.http.delete<any>(url);
    }
  }
