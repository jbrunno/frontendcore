import { formatToBRL } from 'brazilian-values';

export function inputCurrencyToNumber(value: string) {
  const numbersString = value.replace(/[^0-9]/g, '').padStart(3, '0');
  const floatString = numbersString.replace(/^([0-9]*?)([0-9]{2})$/, '$1.$2');
  return parseFloat(floatString);
}

export function formatCurrencyWithUnitPrefix(value: number) {
  return formatToBRL(value);
}

export function formatCurrency(value: number) {
  return formatCurrencyWithUnitPrefix(value).replace(/[^0-9.,]/g, '');
}
