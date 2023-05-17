import { TestBed } from '@angular/core/testing';

import { EntrepriseResolver } from './entreprise.resolver';

describe('EntrepriseResolver', () => {
  let resolver: EntrepriseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EntrepriseResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
