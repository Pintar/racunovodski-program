import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'defaultDecimal'
})
export class DefaultDecimalPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) public locale: string) { }

  public transform(value): string {
    if (!value || isNaN(value)) {
      return '';
    }

    const result = new DecimalPipe(this.locale).transform(value, '1.2-2');
    return result;
  }
}
