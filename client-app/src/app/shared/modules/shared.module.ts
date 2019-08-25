import { NgModule, ModuleWithProviders } from '@angular/core';
import { BaseTemplateComponent } from '../base-template/componentes/base-template.component';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbButtonModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  declarations: [BaseTemplateComponent],
  imports: [
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        NbSidebarService
      ]
    };
  }
}