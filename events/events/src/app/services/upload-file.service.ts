import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>>{
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', file);

    //Make a call to the Spring Boot Application to save the image
    const req = new HttpRequest('POST','http://localhost:8080/files', uploadImageData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  getFile(idImg: number): Observable<Object>{
    return this.http.get('http://localhost:8080/files/' + idImg);
  }
}
