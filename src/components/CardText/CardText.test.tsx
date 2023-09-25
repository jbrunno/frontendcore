import React from 'react';
import { render } from '@test-utils/component-testing';
import CardText from './CardText';

test('renders the CardText', () => {
  const { container } = render(
    <CardText label="Nome" text="Joarez Fernando Carlos de Braga" />,
  );
  expect(container).toMatchSnapshot();
});
