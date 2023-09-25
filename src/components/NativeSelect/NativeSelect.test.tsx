import React from 'react';
import { render } from '@test-utils/component-testing';
import NativeSelect from './NativeSelect';

test('renders the NativeSelect', () => {
  const { container } = render(
    <NativeSelect
      defaultValue={30}
      inputProps={{
        name: 'age',
        id: 'uncontrolled-native',
      }}
    >
      <option value={10}>Ten</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
    </NativeSelect>,
  );
  expect(container).toMatchSnapshot();
});
