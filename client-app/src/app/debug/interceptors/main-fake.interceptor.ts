import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, materialize, dematerialize, mergeMap } from 'rxjs/operators';
import { InvoiceListInterceptor } from './invoice-list.interceptor';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(mergeMap(() => {
      if (InvoiceListInterceptor.canInterceptInvoiceList(request)) {
        return InvoiceListInterceptor.interceptInvoiceList(request);
      }

      // pass through any requests not handled above
      return next.handle(request);
    }))

      // call materialize and dematerialize to ensure delay even if an error is thrown
      // (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
