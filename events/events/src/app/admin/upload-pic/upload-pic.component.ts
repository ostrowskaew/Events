import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { FileHandle } from '../file-handle';
import { ImageFile } from './ImageFile';
@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.css']
})
export class UploadPicComponent implements OnInit {

  selectedFiles: FileList;
  progressInfos = [];
  message = '';
  fileInfos: Observable<ImageFile>;
  images: ImageFile[];
  response : string;

  @Output() lastId : number;
  @Output() idChanged: EventEmitter<number> =   new EventEmitter();

  constructor(private uploadService: UploadFileService) { }


  selectFiles(event) {
    this.progressInfos = [];

    const files = event.target.files;
    let isImage = true;

    for (let i = 0; i < files.length; i++) {
      if (files.item(i).type.match('image.*')) {
        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }

    if (isImage) {
      this.selectedFiles = event.target.files;
    } else {
      this.selectedFiles = undefined;
      event.srcElement.percentage = null;
    }
  }

  ngOnInit() {
    this.findLastId();
  }

  findLastId() {
    this.images.forEach(element => {
      this.lastId = element.id;
    });
  }


  uploadFiles() {
    this.message = '';

    for (let i = this.selectedFiles.length-1; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }


  upload(idx, file) {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    this.uploadService.upload(file)
    .subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
         this.response = HttpResponse.toString();
         this.fileInfos = this.uploadService.getFiles();
         this.lastId = +event.body.message;
         this.idChanged.emit(this.lastId);

        }
      },
      err => {
        this.progressInfos[idx].percentage = 0;
      })
      ;
  }
}
