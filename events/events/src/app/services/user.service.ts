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

  getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.usersUrl);
}

  getUser(id: number): Observable<User> {
     const url = `${this.usersUrl}/${id}`;
     return this.http.get<User>(url);
  }


/** POST: add a new user to the server */
addUser(user: User, idCountry : number): Observable<User> {
  const url = `${this.usersUrl}/${idCountry}`;
  return this.http.post<User>(url, user, this.httpOptions);
}



  deleteUser(idUser: number): Observable<User> {
    const url = `${this.usersUrl}/${idUser}`;
    return this.http.delete<User>(url, this.httpOptions);
  }

}
