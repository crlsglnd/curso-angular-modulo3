import { TestBed } from '@angular/core/testing';

import { Elementos } from './elementos';

describe('Elementos', () => {
  let service: Elementos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Elementos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
