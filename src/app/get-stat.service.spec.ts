import { TestBed } from '@angular/core/testing';

import { GetStatService } from './get-stat.service';

describe('GetStatService', () => {
  let service: GetStatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
