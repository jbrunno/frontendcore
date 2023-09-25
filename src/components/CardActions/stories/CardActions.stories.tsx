import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CardActions } from '../CardActions';
import Button from '../../Button/Button';

export default {
  id: 'CardActions',
  title: 'Component API/CardActions',
  component: CardActions,
} as ComponentMeta<typeof CardActions>;

export function Default(props: ComponentStory<typeof CardActions>) {
  return (
    <CardActions {...props}>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  );
}
