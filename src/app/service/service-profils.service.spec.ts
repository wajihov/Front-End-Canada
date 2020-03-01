import { TestBed } from '@angular/core/testing';

import { ServiceProfilsService } from './service-profils.service';

describe('ServiceProfilsService', () => {
  let service: ServiceProfilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProfilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
