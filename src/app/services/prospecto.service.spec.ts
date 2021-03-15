import { TestBed, inject } from '@angular/core/testing';

import { ProspectoService } from './prospecto.service';

describe('ProspectoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProspectoService]
    });
  });

  it('should be created', inject([ProspectoService], (service: ProspectoService) => {
    expect(service).toBeTruthy();
  }));
});
