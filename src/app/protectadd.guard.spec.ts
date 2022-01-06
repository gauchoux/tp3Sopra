import { TestBed } from '@angular/core/testing';

import { ProtectaddGuard } from './protectadd.guard';

describe('ProtectaddGuard', () => {
  let guard: ProtectaddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectaddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
