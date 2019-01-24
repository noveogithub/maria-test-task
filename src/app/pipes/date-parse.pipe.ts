import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import fecha from 'fecha';

@Pipe({
  name: 'dateParse'
})
export class DateParsePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(value: any, format: string, ...args: any): any {
    const date = fecha.parse(value, format);

    if (!date) {
      return value;
    }

    return this.datePipe.transform(date, ...args);
  }

}
