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

  constructor(private imageService: UploadFileService, private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

    getImage(idImg : number) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.retrievedImage = this.imageService.getFile(idImg);

  }
}
