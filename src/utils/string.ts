import { ClienteTipoEnum } from '@/types';
import {
  formatToCEP,
  formatToCPFOrCNPJ,
  formatToCNPJ,
  formatToCPF,
} from 'brazilian-values';
import { PhoneNumberParseOptions, parsePhoneNumber } from 'awesome-phonenumber';

export const formatCep = (cep: string) => formatToCEP(cep);

type PhoneNumberType =
  | 'input'
  | 'international'
  | 'national'
  | 'e164'
  | 'rfc3966'
  | 'significant';

export const formatPhoneNumber = (
  phoneNumber: string,
  type: PhoneNumberType = 'international',
) => {
  const { number } = parsePhoneNumber(phoneNumber);

  return number ? number[type] : phoneNumber;
};

export const phoneNumberData = (
  phoneNumber: string,
  options?: PhoneNumberParseOptions,
) => parsePhoneNumber(phoneNumber, options);

export const formatDocument = (
  documento: string,
  tipo?: ClienteTipoEnum | null,
) => {
  switch (tipo) {
    case ClienteTipoEnum.FISICA:
      return formatToCPF(documento);
    case ClienteTipoEnum.JURIDICA:
      return formatToCNPJ(documento);
    default:
      return documento.length === 14 || documento.length === 11
        ? formatToCPFOrCNPJ(documento)
        : documento;
  }
};
