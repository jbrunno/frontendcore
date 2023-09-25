import React from 'react';
import { render } from '@test-utils/component-testing';
import { routing } from './routing';

const mockComponent = () => <div>Mocked component</div>;

const MockRouting = routing(mockComponent, {
  suspense: false,
  middlewares: [],
});

test('renders the routing', () => {
  const { container } = render(<MockRouting />);
  expect(container).toMatchSnapshot();
});
