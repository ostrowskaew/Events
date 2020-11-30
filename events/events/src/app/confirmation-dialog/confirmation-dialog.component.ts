import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string,
      public translate: TranslateService) {
        translate.addLangs(['en', 'pl']);
      translate.setDefaultLang('en');
    }
    switchLang(lang: string) {
      this.translate.use(lang);
    }


    onNoClick(): void {
     this.dialogRef.close();
     }

    ngOnInit() {}

}
