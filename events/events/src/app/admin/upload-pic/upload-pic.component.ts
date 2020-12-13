import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { ImageFile } from './ImageFile';
@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.css']
})
export class UploadPicComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  messageFail = '';
  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFileService,
    public translate: TranslateService) {

   }

  @Output() lastId : number;
  @Output() idChanged: EventEmitter<number> =   new EventEmitter();

  ngOnInit(){
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.lastId = +event.body.message;
          this.idChanged.emit(this.lastId);
          this.fileInfos = this.uploadService.getFiles();
          this.messageFail = ''
        }
      },
      err => {
        this.progress = 0;
        this.messageFail = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }

}
