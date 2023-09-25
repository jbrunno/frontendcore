import { Buffer } from 'buffer';

export const decodeToken = (token: string) => {
  const firstSeparator = token.indexOf('.');
  const lastSeparator = token.lastIndexOf('.');

  if (firstSeparator === -1 || firstSeparator >= lastSeparator) {
    throw new Error('The token is malformed.');
  }

  try {
    let payload = Buffer.from(
      token.slice(firstSeparator + 1, lastSeparator),
      'base64',
    ).toString('utf-8');
    payload = JSON.parse(payload);

    if (!payload || typeof payload !== 'object') {
      throw new Error('The payload must be an object');
    }

    return payload;
  } catch (e) {
    throw new Error(`The token is malformed. Error: ${e}`);
  }
};
