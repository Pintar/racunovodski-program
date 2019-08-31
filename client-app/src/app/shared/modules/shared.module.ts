import { NgModule, ModuleWithProviders } from '@angular/core';
import { BaseTemplateComponent } from '../base-template/componentes/base-template.component';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbLayoutModule, NbSidebarModule, NbButtonModule, NbSidebarService, NbTreeGridComponent, NbTreeGridModule, NbSelectModule, NbCardModule } from '@nebular/theme';
import { TableModule } from '../table/modules/table.module';
import { TableService } from '../table/services/table.service';
import { RequestService } from '../api-requests/services/request.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiInvoiceService } from '../api-requests/services/api-invoice.service';
import { DefaultDatePipe } from '../pipes/default-date.pipe';
import { DefaultDecimalPipe } from '../pipes/default-decimal.pipe';

@NgModule({
  declarations: [
    BaseTemplateComponent,
    DefaultDatePipe,
    DefaultDecimalPipe,
  ],
  exports: [
    NgxDatatableModule,
    NbTreeGridModule,
    TableModule,
    NbSelectModule,
    NbCardModule,
    DefaultDatePipe,
    DefaultDecimalPipe,
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    NbLayoutModule,
    NbTreeGridModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    NgxDatatableModule,
    TableModule,
    NbSelectModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        NbSidebarService,
        TableService,
        RequestService,
        ApiInvoiceService,
      ]
    };
  }
}