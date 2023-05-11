import { TestBed } from '@angular/core/testing';

import { SignedUserResolver } from './signed-user.resolver';

describe('SignedUserResolver', () => {
  let resolver: SignedUserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SignedUserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
