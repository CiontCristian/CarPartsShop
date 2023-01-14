import { TestBed } from '@angular/core/testing';

import { CarPartServiceService } from './car-part-service.service';

describe('CarPartServiceService', () => {
  let service: CarPartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarPartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
