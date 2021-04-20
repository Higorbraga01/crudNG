import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { finalize, share } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(req).pipe(
      finalize(() => {
        const elapsed = Date.now() - started;
        console.log(
          `URL: ${req.url} Method: ${req.method} Time took: ${elapsed} ms`
        );
      }),
      share()
    );
  }
}
