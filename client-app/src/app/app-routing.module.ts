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
    path: InvoiceRoutes.list,
    component: BaseTemplateComponent,
    loadChildren: './features/invoice-list/modules/invoice-list.module#InvoiceListModule'
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