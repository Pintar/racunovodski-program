import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomerRoutes } from '../../../shared/pages/helpers/customer-routes.helper';
import { CustomerListComponent } from 'src/app/features/customers/customer-list/components/customer-list.component';
import { CustomerCreateComponent } from '../customer-list/components/customer-create.component';

const routes: Routes = [
  {
    path: CustomerRoutes.list,
    component: CustomerListComponent,
  },
  {
    path: CustomerRoutes.createCustomer,
    component: CustomerCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {
}