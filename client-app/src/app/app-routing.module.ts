import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BaseTemplateComponent } from './shared/base-template/componentes/base-template.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/invoices',
    pathMatch: 'full'
  },
  {
    path: 'invoices',
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