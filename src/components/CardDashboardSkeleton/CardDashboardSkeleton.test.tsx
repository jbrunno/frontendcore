import React from 'react';
import { render } from '@test-utils/component-testing';
import { CardDashboardSkeleton } from './CardDashboardSkeleton';

test('renders the CardDashboardSkeleton', () => {
  const { container } = render(
    <CardDashboardSkeleton className="card-dashboard-skeleton" />,
  );
  expect(container).toMatchSnapshot();
});
