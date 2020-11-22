import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCheckComponent } from './data-check.component';

describe('DataCheckComponent', () => {
  let component: DataCheckComponent;
  let fixture: ComponentFixture<DataCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
