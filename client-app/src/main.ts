import { enableProdMode, LOCALE_ID, TRANSLATIONS, TRANSLATIONS_FORMAT, MissingTranslationStrategy } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
const translationss = require(`raw-loader!./assets/i18n/messages.sl.xlf`).default;

platformBrowserDynamic().bootstrapModule(AppModule, {
  missingTranslation: MissingTranslationStrategy.Error,
  providers: [
    { provide: LOCALE_ID, useValue: 'sl' },
    {
      provide: TRANSLATIONS,
      useValue: translationss
    },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
  ]
})
  .catch(err => console.error(err));

