import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'defaultDate'
})
export class DefaultDatePipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  public transform(value): string {
    if (!value) {
      return '';
    }
    const format = this.locale === 'sl' ? 'dd. MM. yyyy' : 'MM. dd. yyy';
    return new DatePipe(this.locale).transform(value, format);
  }
}
