import { TestBed } from '@angular/core/testing';

import { SomeService } from './some.service';

describe('SomeService', () => {
  let service: SomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
