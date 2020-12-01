import { Component, OnInit } from '@angular/core';
import { Nationality } from './Nationality';
import { NationalityService } from '../../services/nationality.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nationalities',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css']
})
export class NationalityComponent implements OnInit {

  nationalities: Observable<Nationality[]>;
  submitted = false;
  nationality: Nationality = new Nationality();

  constructor(private nationalityService: NationalityService
   ) { }

  ngOnInit() {
    this.reloadData();
  }

  newNationality(): void {
    this.submitted = false;
    this.nationality = new Nationality();
  }

  save() {
    this.nationalityService.addNationality(this.nationality)
      .subscribe(data => console.log(data), error => console.log(error));
    this.nationality = new Nationality();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  reloadData() {
    this.nationalities = this.nationalityService.getNationalities();
  }

  deleteNationality(id: number) {
    this.nationalityService.deleteNationality(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
