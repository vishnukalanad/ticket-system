import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localCurrency',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `₹${value}`;
  }

}
