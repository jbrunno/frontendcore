import type { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuItem from '../../MenuItem/MenuItem';

import { CardTeam } from '../CardTeam';

export default {
  title: '@crm/CardTeam',
  component: CardTeam,
  argTypes: {
    className: { control: 'text' },
    nome: { control: 'text' },
    supervisor: { control: 'text' },
    totalUsers: { control: 'text' },
    color: {
      control: {
        type: 'color',
        presetColors: [
          'inherit',
          'disabled',
          'action',
          'primary',
          'secondary',
          'error',
        ],
      },
    },
    backgroundBox: { control: 'text' },
  },
  args: {
    nome: 'Equipe Principal',
    totalUsers: '123',
    colorIcon: 'primary',
    supervisor: 'John Doe',
    backgroundBox: '#F1E8FF',
    menuItems: [
      <MenuItem>Adicionar Administrador</MenuItem>,
      <MenuItem>Alterar Nome</MenuItem>,
      <MenuItem>Alterar Líder</MenuItem>,
      <MenuItem>Excluir Equipe</MenuItem>,
      <MenuItem>Alterar Meta</MenuItem>,
    ],
  },
} as ComponentMeta<typeof CardTeam>;

export const Default: ComponentStory<typeof CardTeam> = (props) => (
  <CardTeam {...props} />
);
