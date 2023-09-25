import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardUsers } from '../CardUsers';
import MenuItem from '../../MenuItem/MenuItem';

export default {
  title: '@crm/CardUsers',
  component: CardUsers,
  argTypes: {
    className: { control: 'text' },
    tooltipTitle: { control: 'text' },
  },
  args: {
    users: {
      node: {
        cargo: 'Supervisor',
        id: 'test-id',
        nome: 'John Doe',
        equipes: ['Equipe 01', 'Equipe 02'],
      },
    },
    menuItems: [
      <MenuItem>Adicionar à uma equipe</MenuItem>,
      <MenuItem>Remover da carteira</MenuItem>,
      <MenuItem>Alterar status</MenuItem>,
    ],
  },
} as ComponentMeta<typeof CardUsers>;

export const Default: ComponentStory<typeof CardUsers> = (args) => (
  <CardUsers {...args} />
);
