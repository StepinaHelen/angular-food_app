import { TestBed } from '@angular/core/testing';

import { AuthsService } from './auth.service';

describe('AuthService', () => {
  let service: AuthsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
