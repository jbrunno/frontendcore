import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CardContent } from '../CardContent';
import Button from '../../Button/Button';

export default {
  id: 'CardContent',
  title: 'Component API/CardContent',
  component: CardContent,
} as ComponentMeta<typeof CardContent>;

export function Default(props: ComponentStory<typeof CardContent>) {
  return (
    <CardContent {...props}>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardContent>
  );
}
