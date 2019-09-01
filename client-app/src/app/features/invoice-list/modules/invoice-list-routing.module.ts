import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InvoiceListComponent } from '../components/invoice-list.component';
import { InvoiceRoutes } from 'src/app/shared/pages/helpers/invoice-routes.helper';


const invoiceListRoutes: Routes = [
  {
    path: InvoiceRoutes.list,
    component: InvoiceListComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(invoiceListRoutes)],
  exports: [RouterModule],
})
export class InvoiceListRoutingModule {
}