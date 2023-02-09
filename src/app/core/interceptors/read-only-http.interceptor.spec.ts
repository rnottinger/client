import { TestBed } from '@angular/core/testing';

import { ReadOnlyHttpInterceptor } from './read-only-http.interceptor';

describe('ReadOnlyHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ReadOnlyHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ReadOnlyHttpInterceptor = TestBed.inject(ReadOnlyHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
