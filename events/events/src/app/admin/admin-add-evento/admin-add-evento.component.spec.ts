import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEventoComponent } from './admin-add-evento.component';

describe('AdminAddEventoComponent', () => {
  let component: AdminAddEventoComponent;
  let fixture: ComponentFixture<AdminAddEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
