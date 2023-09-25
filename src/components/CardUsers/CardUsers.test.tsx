import React from 'react';
import { render } from '@test-utils/component-testing';
import { CardUsers } from './CardUsers';

test('renders the CardUsers', () => {
  const { container } = render(
    <CardUsers
      users={{
        node: {
          id: 'test-id',
          nome: 'John Doe',
          cargo: 'Supervisor',
          equipes: ['Equipe 01', 'Equipe 02'],
        },
      }}
    />,
  );
  expect(container).toMatchSnapshot();
});
