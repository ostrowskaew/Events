import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLocalizeComponent } from './map-localize.component';

describe('MapLocalizeComponent', () => {
  let component: MapLocalizeComponent;
  let fixture: ComponentFixture<MapLocalizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapLocalizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLocalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
