import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InvoiceListComponent } from '../components/invoice-list.component';


const invoiceListRoutes: Routes = [
  {
    path: '',
    component: InvoiceListComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(invoiceListRoutes)],
  exports: [RouterModule],
})
export class InvoiceListRoutingModule {
}