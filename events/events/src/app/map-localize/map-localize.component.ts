import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-map-localize',
  templateUrl: './map-localize.component.html',
  styleUrls: ['./map-localize.component.css']
})
export class MapLocalizeComponent implements OnInit {

  constructor(public translate: TranslateService
    ) {

    }
    switchLang(lang: string) {
      this.translate.use(lang);
    }

  ngOnInit(): void {
  }

}
