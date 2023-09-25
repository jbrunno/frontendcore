import { ClienteTipoEnum } from '@/types';
import { formatCep, formatDocument, formatPhoneNumber } from './string';

describe('formatPhoneNumber', () => {
  it('should be able to format a phone number', () => {
    expect(formatPhoneNumber('+5511998345678')).toBe('+55 11 99834-5678');
  });
});

describe('formatCep', () => {
  it('should be able to format a CEP', () => {
    expect(formatCep('12345678')).toBe('12345-678');
  });
});

describe('formatDocument', () => {
  it('should be able to format a document', () => {
    const documento = '12345678900';

    expect(formatDocument(documento, ClienteTipoEnum.FISICA)).toBe(
      '123.456.789-00',
    );
    expect(formatDocument('32284981000138', ClienteTipoEnum.JURIDICA)).toBe(
      '32.284.981/0001-38',
    );
    expect(formatDocument(documento)).toBe('123.456.789-00');
  });
});
