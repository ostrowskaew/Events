import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGalleryComponent } from './events-gallery.component';

describe('EventsGalleryComponent', () => {
  let component: EventsGalleryComponent;
  let fixture: ComponentFixture<EventsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
