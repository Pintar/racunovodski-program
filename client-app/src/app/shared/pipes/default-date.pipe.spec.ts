import { DefaultDatePipe } from './default-date.pipe';
import { registerLocaleData } from '@angular/common';
import localeSl from '@angular/common/locales/sl';
import localeSlExtra from '@angular/common/locales/extra/sl';

describe('DefaultDatePipe', () => {

  beforeAll(() => {
    registerLocaleData(localeSl, 'sl', localeSlExtra);
  });

  it('transforms to default sl date format', () => {
    const dateFormatted = new DefaultDatePipe('sl').transform('2018-11-20T09:43:35.355');
    expect(dateFormatted).toEqual('20. 11. 2018');
  });

  it('transforms to default other local date format', () => {
    const dateFormatted = new DefaultDatePipe('en').transform('2018-11-20T09:43:35.355');
    expect(dateFormatted).toEqual('11. 20. 2018');
  });
});
