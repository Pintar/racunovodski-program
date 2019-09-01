import { Component, OnInit } from '@angular/core';
import { I18n } from '@ngx-translate/i18n-polyfill';
import { InvoiceRoutes } from '../../pages/helpers/invoice-routes.helper';
import { CustomerRoutes } from '../../pages/helpers/customer-routes.helper';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent implements OnInit {
  items = [
    {
      title: this.i18n('Invoices'),
      children: [
        {
          title: this.i18n('list'),
          link: [`/${InvoiceRoutes.list}`],
        },
        {
          title: this.i18n('create new'),
          link: [`/${InvoiceRoutes.createInvoice}`],
        },
      ],
    },

    {
      title: this.i18n('Customers'),
      children: [
        {
          title: this.i18n('list'),
          link: [`/${CustomerRoutes.list}`],
        },
        {
          title: this.i18n('create new'),
          link: [`/${CustomerRoutes.createCustomer}`],
        },
      ],
    },
  ];

  constructor(private i18n: I18n) { }

  ngOnInit() {
  }

}
