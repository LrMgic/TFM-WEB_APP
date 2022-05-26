import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})

export class FormatDatePipe implements PipeTransform {
  transform(value: Date, ...args: number[]): unknown {
    // TODO 1
    const date: Date = new Date(value);
    let formatted: string = '';
    if (value !== null) {
      formatted = this.formatDate(
        args[0],
        this.needZero(date.getDate()),
        this.needZero(date.getMonth() + 1),
        this.needZero(date.getFullYear())
      );
    }
    return formatted;
  }

  private formatDate(
    style: number,
    day: string,
    month: string,
    year: string
  ): string {
    return style === 1
      ? `${day}${month}${year}`
      : style === 2
      ? `${day} / ${month} / ${year}`
      : style === 3
      ? `${day}/${month}/${year}`
      : `${year}-${month}-${day}`;
  }

  private needZero(checkNumber: number): string {
    return checkNumber < 10 ? '0' + checkNumber : String(checkNumber);
  }
}
