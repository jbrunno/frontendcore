import React from 'react';
import { render } from '@test-utils/component-testing';
import { CardTeam } from './CardTeam';
import MenuItem from '../MenuItem/MenuItem';

test('renders the CardTeam', () => {
  const { container } = render(
    <CardTeam
      className="card-team"
      nome="Nome"
      supervisor="Supervisor"
      totalUsers="123"
      colorIcon="primary"
      backgroundBox="#F1E8FF"
      tooltipTitle="Tooltip Title"
      menuItems={[
        <MenuItem>Adicionar Administrador</MenuItem>,
        <MenuItem>Alterar Nome</MenuItem>,
        <MenuItem>Alterar Líder</MenuItem>,
        <MenuItem>Excluir Equipe</MenuItem>,
        <MenuItem>Alterar Meta</MenuItem>,
      ]}
    />,
  );
  expect(container).toMatchSnapshot();
});
