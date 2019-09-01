import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from '../customer-list/components/customer-list.component';
import { CustomerRoutes } from 'src/app/shared/pages/helpers/customer-routes.helper';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerCreateComponent } from '../customer-list/components/customer-create.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule,
    CustomersRoutingModule,
  ]
})
export class CustomersModule { }
