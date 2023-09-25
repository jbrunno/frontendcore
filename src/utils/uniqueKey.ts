export const canUseSymbol =
  typeof Symbol === 'function' && typeof Symbol.for === 'function';

export const uniqueKey = (key: string) =>
  canUseSymbol ? Symbol.for(key) : key;
