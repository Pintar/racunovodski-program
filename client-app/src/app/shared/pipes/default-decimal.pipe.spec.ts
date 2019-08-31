import { DefaultDecimalPipe } from './default-decimal.pipe';
import localeSl from '@angular/common/locales/sl';
import localeSlExtra from '@angular/common/locales/extra/sl';
import { registerLocaleData } from '@angular/common';

describe('DefaultDecimalPipe', () => {

  beforeAll(() => {
    registerLocaleData(localeSl, 'sl', localeSlExtra);
  });


  it('create an instance', () => {
    const pipe = new DefaultDecimalPipe('sl');
    expect(pipe).toBeTruthy();
  });
});
