export const promiseHandler = <T = unknown, E = Error>(promise: Promise<T>) =>
  promise.then((result) => [null, result]).catch((error) => [error]) as Promise<
    [E | null, T | undefined]
  >;
