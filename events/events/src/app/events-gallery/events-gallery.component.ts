import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-events-gallery',
  templateUrl: './events-gallery.component.html',
  styleUrls: ['./events-gallery.component.css']
})
export class EventsGalleryComponent implements OnInit {

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  constructor(private imageService: UploadFileService, private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }


    getImage(idImg : number) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.imageService.getFile(idImg)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}
