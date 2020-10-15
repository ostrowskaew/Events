import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsOldComponent } from './events-old.component';

describe('EventsOldComponent', () => {
  let component: EventsOldComponent;
  let fixture: ComponentFixture<EventsOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsOldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
