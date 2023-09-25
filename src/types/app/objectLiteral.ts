export type ObjectLiteral<
  K extends string | number | symbol = string,
  V = unknown,
> = Record<K, V>;
