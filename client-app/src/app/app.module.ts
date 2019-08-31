import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, TRANSLATIONS_FORMAT, TRANSLATIONS } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/modules/shared.module';
import { I18n } from '@ngx-translate/i18n-polyfill';
import { registerLocaleData } from '@angular/common';
import localeSl from '@angular/common/locales/sl';
import localeSlExtra from '@angular/common/locales/extra/sl';
import { DebugModule } from './debug/modules/debug.module';

declare const require;

registerLocaleData(localeSl, 'sl', localeSlExtra);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    AppRoutingModule,
    SharedModule.forRoot(),
    // DebugModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'sl' },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
    {
      provide: TRANSLATIONS,
      useFactory: (locale) => {
        return require(`raw-loader!../assets/i18n/messages.${locale}.xlf`).default;
      },
      deps: [LOCALE_ID]
    },
    I18n
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
