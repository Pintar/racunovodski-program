import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from '../invoice-list/components/invoice-list.component';
import { InvoiceRoutes } from 'src/app/shared/pages/helpers/invoice-routes.helper';
import { InvoiceCreateComponent } from '../invoice-create/components/invoice-create.component';


const routes: Routes = [
  {
    path: InvoiceRoutes.list,
    component: InvoiceListComponent
  },
  {
    path: InvoiceRoutes.createInvoice,
    component: InvoiceCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
