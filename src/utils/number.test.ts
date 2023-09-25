import {
  formatCurrency,
  formatCurrencyWithUnitPrefix,
  inputCurrencyToNumber,
} from './number';

describe('inputCurrencyToNumber', () => {
  it('should be able to convert a string to a number', () => {
    expect(inputCurrencyToNumber('0')).toBe(0);
    expect(inputCurrencyToNumber('1')).toBe(0.01);
    expect(inputCurrencyToNumber('12')).toBe(0.12);
    expect(inputCurrencyToNumber('123')).toBe(1.23);
    expect(inputCurrencyToNumber('1234')).toBe(12.34);
    expect(inputCurrencyToNumber('12345')).toBe(123.45);
  });

  it('should be able to convert a string to a number with a prefix', () => {
    expect(inputCurrencyToNumber('R$0')).toBe(0);
    expect(inputCurrencyToNumber('R$1')).toBe(0.01);
    expect(inputCurrencyToNumber('R$12')).toBe(0.12);
    expect(inputCurrencyToNumber('R$123')).toBe(1.23);
    expect(inputCurrencyToNumber('R$1234')).toBe(12.34);
    expect(inputCurrencyToNumber('R$12345')).toBe(123.45);
  });
});

describe('formatCurrency', () => {
  it('should be able to format a number to a string', () => {
    expect(formatCurrency(0)).toBe('0,00');
    expect(formatCurrency(0.01)).toBe('0,01');
    expect(formatCurrency(0.12)).toBe('0,12');
    expect(formatCurrency(1.23)).toBe('1,23');
    expect(formatCurrency(12.34)).toBe('12,34');
    expect(formatCurrency(123.45)).toBe('123,45');
  });
});

describe('formatCurrencyWithUnitPrefix', () => {
  it('should be able to format a number to a string with a prefix', () => {
    expect(formatCurrencyWithUnitPrefix(0)).toBe('R$ 0,00');
    expect(formatCurrencyWithUnitPrefix(0.01)).toBe('R$ 0,01');
    expect(formatCurrencyWithUnitPrefix(0.12)).toBe('R$ 0,12');
    expect(formatCurrencyWithUnitPrefix(1.23)).toBe('R$ 1,23');
    expect(formatCurrencyWithUnitPrefix(12.34)).toBe('R$ 12,34');
    expect(formatCurrencyWithUnitPrefix(123.45)).toBe('R$ 123,45');
  });
});
