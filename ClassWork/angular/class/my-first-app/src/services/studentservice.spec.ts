import { TestBed } from '@angular/core/testing';

import { Studentservice } from './studentservice';

describe('Studentservice', () => {
  let service: Studentservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Studentservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});


