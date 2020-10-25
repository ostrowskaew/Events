import { Injectable } from '@angular/core';
import { User } from '../database-components/user/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private usersUrl = 'http://localhost:8080/users';


  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.usersUrl);
  }

    getUser(id: string): Observable<Object> {
       const url = `${this.usersUrl}/${id}`;
       return this.http.get<User>(url);
    }


  /** POST: add a new user to the server */
    addUser(user: Object, idCountry : number): Observable<Object> {
      const url = `${this.usersUrl}/country/${idCountry}`;
      return this.http.post(url, user);
    }


    deleteUser(idUser: string): Observable<any> {
      const url = `${this.usersUrl}/${idUser}`;
      return this.http.delete<User>(url);
    }
}
