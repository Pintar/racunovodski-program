import { NgModule } from '@angular/core';
import { TableComponent } from '../components/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from '../components/simple-table.component';

@NgModule({
  declarations: [
    TableComponent,
    SimpleTableComponent,
  ],
  exports: [
    TableComponent,
    SimpleTableComponent,
    NgxDatatableModule
  ],
  imports: [
    NgxDatatableModule,
    CommonModule
  ]
})
export class TableModule {
}
