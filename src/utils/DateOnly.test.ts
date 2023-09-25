import { DateOnly } from './DateOnly';

describe('DateOnly', () => {
  it('should be able to create a new DateOnly', () => {
    const date = new DateOnly('2020-01-01');
    expect(date).toBeInstanceOf(DateOnly);
  });

  it('should be able to create a new DateOnly with a Date', () => {
    const date = new DateOnly(new Date('2020-01-01T00:00:00'));
    expect(date).toBeInstanceOf(DateOnly);
  });

  it('should be able to create a new DateOnly with a undefined', () => {
    const date = new DateOnly();
    expect(date).toBeInstanceOf(DateOnly);
  });

  it('should be able to format a DateOnly', () => {
    const date = new DateOnly('2020-01-01');
    expect(date.format('dd/MM/yyyy')).toBe('01/01/2020');
  });

  it('should be able to format a DateOnly with a Date', () => {
    const date = new DateOnly(new Date('2020-01-01T00:00:00'));
    expect(date.format('dd/MM/yyyy')).toBe('01/01/2020');
  });

  it('should be able to get the value of a DateOnly', () => {
    const date = new DateOnly('2020-01-01');
    expect(date.toString()).toBe('2020-01-01');
  });

  it('should be able to get the value of a DateOnly with a Date', () => {
    const date = new DateOnly(new Date('2020-01-01T00:00:00'));
    expect(date.toString()).toBe('2020-01-01');
  });
});
