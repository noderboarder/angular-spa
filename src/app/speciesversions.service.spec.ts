import { TestBed } from '@angular/core/testing';

import { SpeciesversionsService } from './speciesversions.service';

describe('SpeciesversionsService', () => {
  let service: SpeciesversionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeciesversionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
