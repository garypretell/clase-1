import { TestBed } from '@angular/core/testing';

import { RickAndMorthyService } from './rick-and-morthy.service';

describe('RickAndMorthyService', () => {
  let service: RickAndMorthyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndMorthyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
