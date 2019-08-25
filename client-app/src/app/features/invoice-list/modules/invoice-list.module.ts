import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { InvoiceListComponent } from '../components/invoice-list.component';
import { InvoiceListRoutingModule } from './invoice-list-routing.module';

@NgModule({
  declarations: [
    InvoiceListComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    InvoiceListRoutingModule,
  ]
})
export class InvoiceListModule { }
