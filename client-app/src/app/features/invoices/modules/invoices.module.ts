import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from '../invoice-list/components/invoice-list.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { InvoiceCreateComponent } from '../invoice-create/components/invoice-create.component';
import { InvoiceRoutingModule } from './invoices-routing.module';



@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule,
    InvoiceRoutingModule,
  ]
})
export class InvoicesModule { }
