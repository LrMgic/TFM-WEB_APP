import { TestBed } from '@angular/core/testing';

import { TreballadorGuard } from './treballador.guard';

describe('TreballadorGuard', () => {
  let guard: TreballadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TreballadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
