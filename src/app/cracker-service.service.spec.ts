import { TestBed } from '@angular/core/testing';

import { CrackerServiceService } from './cracker-service.service';

describe('CrackerServiceService', () => {
  let service: CrackerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrackerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
