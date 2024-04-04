import { TestBed } from '@angular/core/testing';

import { CntServiceService } from './cnt-service.service';

describe('CntServiceService', () => {
  let service: CntServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CntServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
