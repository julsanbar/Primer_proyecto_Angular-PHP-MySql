import { TestBed } from '@angular/core/testing';

import { VigilanteLoginRegistroGuard } from './vigilante-login-registro.guard';

describe('VigilanteLoginRegistroGuard', () => {
  let guard: VigilanteLoginRegistroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteLoginRegistroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
