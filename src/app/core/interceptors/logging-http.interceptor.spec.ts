import { TestBed } from '@angular/core/testing';

import { LoggingHttpInterceptor } from './logging-http.interceptor';

describe('LoggingHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoggingHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoggingHttpInterceptor = TestBed.inject(LoggingHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
