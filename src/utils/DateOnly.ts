import { format } from 'date-fns';

function removeISOTime(date: string) {
  const indexOfT = date.indexOf('T');
  if (indexOfT > -1) {
    return date.slice(0, indexOfT);
  }
  return date;
}

function generateValue(date?: string | Date): string {
  if (!date) {
    return format(new Date(), 'yyyy-MM-dd');
  }
  if (date instanceof Date) {
    return format(date, 'yyyy-MM-dd');
  }
  return removeISOTime(date);
}

const ISO_REGEX = /^[0-9]{4}-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])$/;

export class DateOnly {
  private day: number;

  private month: number;

  private year: number;

  private value: string;

  private dateValue: Date;

  constructor(date?: string | Date) {
    this.value = generateValue(date);
    if (!ISO_REGEX.test(this.value)) {
      throw new Error(`${date} is not a valid date.`);
    }
    this.dateValue = new Date(`${this.value}T00:00:00.000`);
    const dateParts = this.value.split('-');
    this.year = parseInt(dateParts[0], 10);
    this.month = parseInt(dateParts[1], 10);
    this.day = parseInt(dateParts[2], 10);
  }

  public toString(): string {
    return this.value;
  }

  public toJSDate(): Date {
    return this.dateValue;
  }

  public format(pattern: string): string {
    return pattern
      .replace('dd', this.day.toString().padStart(2, '0'))
      .replace('MM', this.month.toString().padStart(2, '0'))
      .replace('yyyy', this.year.toString().padStart(4, '0'))
      .replace('d', this.day.toString())
      .replace('M', this.month.toString())
      .replace('yy', this.year.toString().padStart(4, '0').substr(2));
  }

  public toJSON(): string {
    return this.value;
  }
}
