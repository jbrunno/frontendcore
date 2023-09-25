import React, { ComponentType } from 'react';
import { render } from '@test-utils/component-testing';
import { Suspensable } from './Suspensable';

test('renders the Suspensable', () => {
  const promise = new Promise<{ default: ComponentType }>((resolve) => {
    setTimeout(() => {
      resolve({ default: () => <div>Test</div> });
    }, 1000);
  });
  const { container } = render(
    <Suspensable component={React.lazy(() => promise)}>
      <div>children</div>
    </Suspensable>,
  );

  expect(container).toMatchSnapshot();
});
