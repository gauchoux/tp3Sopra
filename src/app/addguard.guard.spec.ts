import { TestBed } from '@angular/core/testing';

import { AddguardGuard } from './addguard.guard';

describe('AddguardGuard', () => {
  let guard: AddguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
