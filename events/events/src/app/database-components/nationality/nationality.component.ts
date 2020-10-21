import { Component, OnInit } from '@angular/core';
import { Nationality } from './nationality';
import { NationalityService } from '../../services/nationality.service';

@Component({
  selector: 'app-nationalities',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css']
})
export class NationalityComponent implements OnInit {

 nationalities: Nationality[];

  constructor(private nationalityService: NationalityService) {}

  ngOnInit() {
    this.getNationalities();
  }

  getNationalities(): void {
    this.nationalityService.getNationalities()
    .subscribe(nationalities => this.nationalities = nationalities);
  }

  getNationalityList(): Nationality[] {
    return this.nationalities;
  }


  addNationality(country: string): void {
    country = country.trim();
    let idNationality = 0;
    if (!country) { return; }
    this.nationalityService.addNationality({idNationality, country} as Nationality)
      .subscribe(nationality => {
        this.nationalities.push(nationality);
      });
  }

}
