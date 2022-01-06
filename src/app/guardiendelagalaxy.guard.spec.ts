import { TestBed } from '@angular/core/testing';

import { GuardiendelagalaxyGuard } from './guardiendelagalaxy.guard';

describe('GuardiendelagalaxyGuard', () => {
  let guard: GuardiendelagalaxyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiendelagalaxyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
