import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../../Button/Button';
import Card from '../../Card/Card';
import CardActions from '../../CardActions/CardActions';
import CardContent from '../../CardContent/CardContent';
import Typography from '../../Typography/Typography';

import { CardMedia } from '../CardMedia';

export default {
  id: 'cardMedia',
  title: 'Component API/CardMedia',
  component: CardMedia,
} as ComponentMeta<typeof CardMedia>;

export const Default: ComponentStory<typeof CardMedia> = (props) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      sx={{ height: '140px' }}
      {...props}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);
