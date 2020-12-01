import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private language: BehaviorSubject<string> = new BehaviorSubject('en');

  public get Data(): Observable<string>{
    return this.language.asObservable();
  }
  constructor() {
  }

  changeLang(lang: string){
    this.language.next(lang);
  }
}
