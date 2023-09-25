/* eslint-disable import/no-duplicates */
import ptBR from 'date-fns/locale/pt-BR';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import differenceInYears from 'date-fns/differenceInYears';
import format from 'date-fns/format';
import { getDay, nextMonday } from 'date-fns';
import { DateOnly } from './DateOnly';
import { PeriodsEnum } from '../types';

const relativeDays = ['Hoje', 'Amanhã'];

export enum DayFormat {
  ABBREVIATED = 'abbreviated',
  WIDE = 'wide',
}

const weekDays = {
  [DayFormat.ABBREVIATED]: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  [DayFormat.WIDE]: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ],
};

export function getAgeFromBirthdate(birthdate: DateOnly) {
  return differenceInYears(new Date(), birthdate.toJSDate());
}

const defaultDateFormat = 'dd/MM/yyyy';

export function formatDate(date: Date | DateOnly) {
  if (date instanceof Date) {
    return format(new Date(date), defaultDateFormat, { locale: ptBR });
  }
  return date.format(defaultDateFormat);
}

export function calculoDiasAtraso(dataDivida: DateOnly) {
  return differenceInCalendarDays(new Date(), dataDivida.toJSDate());
}

export function formatDateWithHours(date: Date) {
  return format(new Date(date), `${defaultDateFormat} 'ás' HH:mm`, {
    locale: ptBR,
  });
}

export function formatTime(date: Date) {
  return format(new Date(date), 'hh:mm', {
    locale: ptBR,
  });
}

export function formattedCurrentDate() {
  return format(new Date(), "dd MMM yyyy,' 'EEEE", { locale: ptBR });
}

export enum WeekDays {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

const weekend = [WeekDays.Saturday, WeekDays.Sunday];

export function isCrmWeekend(date: Date): boolean {
  return weekend.includes(getDay(date));
}

export function skipCrmWeekend(date: DateOnly): DateOnly {
  if (isCrmWeekend(date.toJSDate())) {
    const next = nextMonday(date.toJSDate());
    const dateOnly = new DateOnly(next);
    return dateOnly;
  }
  return date;
}

const TIME_FACTOR = {
  DAY: 24 * 60 * 60 * 1000,
  HOUR: 60 * 60 * 1000,
  MINUTE: 60 * 1000,
  SECOND: 1000,
};

export type TimeDifference = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
};

export function getTimeDifference(
  date1: Date,
  date2: Date,
  daysInHours = true,
): TimeDifference {
  let diff = Math.abs(date2.getTime() - date1.getTime());

  const totalSeconds = Math.floor(diff / TIME_FACTOR.SECOND);

  const days = daysInHours ? 0 : Math.floor(diff / TIME_FACTOR.DAY);
  diff -= days * TIME_FACTOR.DAY;

  const hours = Math.floor(diff / TIME_FACTOR.HOUR);
  diff -= hours * TIME_FACTOR.HOUR;

  const minutes = Math.floor(diff / TIME_FACTOR.MINUTE);
  diff -= minutes * TIME_FACTOR.MINUTE;

  const seconds = Math.floor(diff / TIME_FACTOR.SECOND);

  return {
    days,
    hours,
    minutes,
    seconds,
    totalSeconds,
  };
}

export function crmFormatRelative(
  date: Date,
  baseDate: Date,
  dayFormat: DayFormat = DayFormat.ABBREVIATED,
) {
  const days = differenceInCalendarDays(date, baseDate);
  if (days < 0 || days > 7) {
    return formatDate(date);
  }

  if (days <= 1) {
    return relativeDays[days];
  }

  return weekDays[dayFormat][date.getDay()];
}

export function crmPeriods(period: PeriodsEnum): Date {
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  switch (period) {
    case PeriodsEnum.TODAY: {
      break;
    }

    case PeriodsEnum.YESTERDAY: {
      date.setDate(date.getDate() - 1);
      break;
    }

    case PeriodsEnum.LAST7DAYS: {
      date.setDate(date.getDate() - 7);
      break;
    }

    case PeriodsEnum.LAST15DAYS: {
      date.setDate(date.getDate() - 15);
      break;
    }

    case PeriodsEnum.THISMONTH: {
      date.setDate(date.getDate() - date.getDate() + 1);
      break;
    }

    case PeriodsEnum.LASTMONTH: {
      date.setMonth(date.getMonth() - 1);
      date.setDate(date.getDate() - date.getDate() + 1);
      break;
    }

    case PeriodsEnum.LAST6MONTHS: {
      date.setMonth(date.getMonth() - 6);
      date.setDate(date.getDate() - date.getDate() + 1);
      break;
    }

    default: {
      break;
    }
  }
  return date;
}
