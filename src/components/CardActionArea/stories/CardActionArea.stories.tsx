import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CardActionArea } from '../CardActionArea';
import Button from '../../Button/Button';
import CardActions from '../../CardActions/CardActions';

export default {
  id: 'CardActionArea',
  title: 'Component API/CardActionArea',
  component: CardActionArea,
} as ComponentMeta<typeof CardActionArea>;

export function Default(props: ComponentStory<typeof CardActionArea>) {
  return (
    <CardActionArea {...props}>
      Lorem ipsum dolor sit amet
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </CardActionArea>
  );
}
