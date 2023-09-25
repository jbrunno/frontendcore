import type { ComponentMeta, ComponentStory } from '@storybook/react';

import CardText from '../CardText';

export default {
  title: '@crm/CardText',
  component: CardText,
} as ComponentMeta<typeof CardText>;

export const Default: ComponentStory<typeof CardText> = (props) => (
  <CardText {...props} />
);

Default.args = {
  label: 'Nome',
  text: 'Joarez Fernando Carlos de Braga',
};
