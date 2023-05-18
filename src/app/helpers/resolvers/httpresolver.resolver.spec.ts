import { TestBed } from '@angular/core/testing';

import { HttpresolverResolver } from './httpresolver.resolver';

describe('HttpresolverResolver', () => {
  let resolver: HttpresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HttpresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
