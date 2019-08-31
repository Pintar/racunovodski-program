import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { nameOfFactory } from 'src/app/shared/utils/consts/nameOfFactory.const';
import { InvoiceListItem } from '../interfaces/invoice-list-item.interface';
import { I18n } from '@ngx-translate/i18n-polyfill';
import { ApiInvoiceService } from 'src/app/shared/api-requests/services/api-invoice.service';
import { DefaultDatePipe } from 'src/app/shared/pipes/default-date.pipe';
import { DefaultDecimalPipe } from 'src/app/shared/pipes/default-decimal.pipe';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  nameOf = nameOfFactory<InvoiceListItem>();

  columns: TableColumn[] = [
    {
      prop: this.nameOf('invoiceNumber'),
      name: this.i18n('Invoice number')
    },
    {
      prop: this.nameOf('invoiceDate'),
      name: this.i18n('Invoice date'),
      pipe: new DefaultDatePipe(this.locale),
    },
    {
      prop: this.nameOf('dueDate'),
      name: this.i18n('Due date'),
      pipe: new DefaultDatePipe(this.locale),
    },
    { prop: this.nameOf('description'), name: this.i18n('Description') },
    { prop: this.nameOf('customerName'), name: this.i18n('Customer') },
    { prop: this.nameOf('currency'), name: this.i18n('Currency') },
    {
      prop: this.nameOf('vat'),
      name: this.i18n('VAT'),
      pipe: new DefaultDecimalPipe(this.locale),
    },
    {
      prop: this.nameOf('priceTotal'),
      name: this.i18n('Invoice number'),
      pipe: new DefaultDecimalPipe(this.locale),
    },
  ];

  request = this.apiService.getInvoiceListRequest(null);

  constructor(
    private i18n: I18n,
    private apiService: ApiInvoiceService,
    @Inject(LOCALE_ID) public locale: string) { }

  ngOnInit() {
  }
}
