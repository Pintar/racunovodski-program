import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvoiceListComponent } from '../components/invoice-list.component';
import { InvoiceListRoutingModule } from './invoice-list-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [
    InvoiceListComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule,
    InvoiceListRoutingModule,
  ]
})
export class InvoiceListModule { }
