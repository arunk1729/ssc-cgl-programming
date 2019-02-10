import { TestBed } from '@angular/core/testing';

import { SscServiceService } from './ssc-service.service';

describe('SscServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SscServiceService = TestBed.get(SscServiceService);
    expect(service).toBeTruthy();
  });
});
