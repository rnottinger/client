import { TestBed } from '@angular/core/testing';

import { BusyHttpInterceptor } from './busy-http.interceptor';

describe('BusyHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BusyHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BusyHttpInterceptor = TestBed.inject(BusyHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
