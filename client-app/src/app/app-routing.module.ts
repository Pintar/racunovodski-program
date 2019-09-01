import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InvoiceRoutes } from './shared/pages/helpers/invoice-routes.helper';
import { BaseTemplateComponent } from './shared/base-template/components/base-template.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: InvoiceRoutes.list,
    pathMatch: 'full'
  },
  {
    path: '',
    component: BaseTemplateComponent,
    children: [
      {
        path: '',
        loadChildren: './features/invoices/modules/invoices.module#InvoicesModule'
      },
      {
        path: '',
        loadChildren: './features/customers/modules/customers.module#CustomersModule'
      },
    ]
  },

];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}