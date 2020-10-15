import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularDataComponent } from './formular-data.component';

describe('FormularDataComponent', () => {
  let component: FormularDataComponent;
  let fixture: ComponentFixture<FormularDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
