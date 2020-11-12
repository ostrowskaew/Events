import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

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

  getFile(idImg: number): any{
    this.http.get('http://localhost:8080/files/' + idImg)
    .subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
    );
    return this.retrievedImage;

  }
}
