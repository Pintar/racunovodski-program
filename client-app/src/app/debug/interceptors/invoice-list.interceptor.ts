import { Injectable } from '@angular/core';
import { HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TableQueryResponse } from 'src/app/shared/table/interfaces/table-response.interface';
import { InvoiceListItem } from 'src/app/features/invoices/invoice-list/interfaces/invoice-list-item.interface';

@Injectable()
export class InvoiceListInterceptor {

  constructor() { }

  static interceptInvoiceList(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    const invoiceListData: TableQueryResponse<InvoiceListItem> = {
      offset: 0,
      pageSize: 20,
      recordCount: 3,
      results: [
        { currency: 'EUR', customerName: 'Pintar d.o.o.', description: 'programiranje', dueDate: '2019-04-05T14:35:40+02:00', invoiceDate: '2019-04-05T14:35:40+02:00', invoiceNumber: '15', priceTotal: 1000.2, vat: 220.2 },
        { currency: 'EUR', customerName: 'Pintar d.o.o.', description: 'programiranje', dueDate: '2019-04-05T14:35:40+02:00', invoiceDate: '2019-04-05T14:35:40+02:00', invoiceNumber: '16', priceTotal: 1000, vat: 220 },
        { currency: 'EUR', customerName: 'Pintar d.o.o.', description: 'programiranje', dueDate: '2019-04-05T14:35:40+02:00', invoiceDate: '2019-04-05T14:35:40+02:00', invoiceNumber: '17', priceTotal: 1000, vat: 220 },
      ]
    }

    return of(new HttpResponse(
      {
        status: 200,
        body: invoiceListData
      }));
  }

  static canInterceptInvoiceList(request: HttpRequest<any>): boolean {
    return request.url.endsWith(`api/invoices/_filter`) ?
      true : false;
  }
}
