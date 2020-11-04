import { Injectable } from '@angular/core';
import { User } from '../database-components/user/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'http://localhost:8080/api/test/';

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

    getUser(id: number): Observable<Object> {
       const url = `${this.usersUrl}/${id}`;
       return this.http.get<User>(url);
    }


  /** POST: add a new user to the server */
    addUser(user: Object, idCountry : number): Observable<Object> {
      const url = `${this.usersUrl}/country/${idCountry}`;
      return this.http.post(url, user);
    }


    deleteUser(idUser: number): Observable<any> {
      const url = `${this.usersUrl}/${idUser}`;
      return this.http.delete<any>(url);
    }

    getPublicContent(): Observable<any> {
      return this.http.get(API_URL + 'all', { responseType: 'text' });
    }

    getUserBoard(): Observable<any> {
      return this.http.get(API_URL + 'user', { responseType: 'text' });
    }

    getAdminBoard(): Observable<any> {
      return this.http.get(API_URL + 'admin', { responseType: 'text' });
    }
}
