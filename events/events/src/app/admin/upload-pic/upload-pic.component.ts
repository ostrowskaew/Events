import { Component, OnInit } from '@angular/core';
import { FileHandle } from '../file-handle';
@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.css']
})
export class UploadPicComponent implements OnInit {
  uploadedFiles: FileHandle [];
  constructor() { }
  ngOnInit(): void {
  }

  filesDropped (files: FileHandle[]) {
    this.uploadedFiles = files;
  }

}
