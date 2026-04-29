import { TestBed } from '@angular/core/testing';

import { StudentData } from './student-data';

describe('StudentData', () => {
  let service: StudentData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
