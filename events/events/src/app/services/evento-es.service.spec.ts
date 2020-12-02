import { TestBed } from '@angular/core/testing';

import { EventoEsService } from './evento-es.service';

describe('EventoEsService', () => {
  let service: EventoEsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoEsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
