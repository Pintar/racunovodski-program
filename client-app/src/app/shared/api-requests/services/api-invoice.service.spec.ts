import { TestBed } from '@angular/core/testing';

import { ApiInvoiceService } from './api-invoice.service';
import { RequestService } from './request.service';

describe('ApiInvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: RequestService, useValue: {} },
      ApiInvoiceService,
    ]
  }));

  it('should be created', () => {
    const service: ApiInvoiceService = TestBed.get(ApiInvoiceService);
    expect(service).toBeTruthy();
  });
});
