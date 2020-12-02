import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventoEsComponent } from './add-evento-es.component';

describe('AddEventoEsComponent', () => {
  let component: AddEventoEsComponent;
  let fixture: ComponentFixture<AddEventoEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventoEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventoEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
