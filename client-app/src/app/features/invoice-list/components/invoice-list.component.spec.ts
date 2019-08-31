import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListComponent } from './invoice-list.component';
import { MockComponent } from 'ng-mocks';
import { TableComponent } from 'src/app/shared/table/components/table.component';
import { I18n } from '@ngx-translate/i18n-polyfill';
import { ApiInvoiceService } from 'src/app/shared/api-requests/services/api-invoice.service';

describe('InvoiceListComponent', () => {
  let component: InvoiceListComponent;
  let fixture: ComponentFixture<InvoiceListComponent>;

  const apiServiceMock = {
    getInvoiceListRequest: () => null
  } as Partial<ApiInvoiceService>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InvoiceListComponent,
        MockComponent(TableComponent),
      ],
      providers: [
        { provide: I18n, useValue: jasmine.createSpy('translate') },
        { provide: ApiInvoiceService, useValue: apiServiceMock },
      ]
    })

      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
