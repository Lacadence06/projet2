import { TestBed } from '@angular/core/testing';

import { MethodHttpService } from './method-http.service';

describe('MethodHttpService', () => {
  let service: MethodHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
