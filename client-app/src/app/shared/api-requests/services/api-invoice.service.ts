import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableQueryResponse } from '../../table/interfaces/table-response.interface';
import { InvoiceListItem } from 'src/app/features/invoice-list/interfaces/invoice-list-item.interface';
import { RequestService } from './request.service';
import { TableRequest } from '../../table/interfaces/table-request.interface';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class ApiInvoiceService {

  constructor(private requestService: RequestService) { }

  getInvoiceList(body: TableRequest): Observable<TableQueryResponse<InvoiceListItem>> {
    return this.requestService.makeRequest(this.getInvoiceListRequest(body));
  }

  getInvoiceListRequest(body: TableRequest): HttpRequest<TableQueryResponse<InvoiceListItem>> {
    return new HttpRequest(
      'POST',
      `api/invoices/_filter`,
      body as any);
  }

}
