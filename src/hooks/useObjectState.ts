import React, { Dispatch } from 'react';

type SetStateAction<S> = ((prev: S) => S) | S;

type STATE<R> = [R, Dispatch<SetStateAction<Partial<R>>>];

const stateReducer = <S>(state: S, setState: SetStateAction<unknown>) => ({
  ...state,
  ...(typeof setState === 'function' ? setState(state) : setState),
});

export const useObjectState = <S>(
  initial: S,
  lazyInitializer?: (init: S) => S,
): STATE<S> => {
  const [state, setState] = React.useReducer(stateReducer, initial, (init) =>
    lazyInitializer ? lazyInitializer(init) : init,
  );

  return [state, setState];
};

export default useObjectState;
