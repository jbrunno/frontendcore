import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../Card';
import Box from '../../Box/Box';
import Button from '../../Button/Button';

export default {
  id: 'Card',
  title: 'Surfaces/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export function Default(props: ComponentStory<typeof Card>) {
  return (
    <Card
      sx={{
        width: 300,
        height: 300,
        padding: 1,
      }}
      {...props}
    >
      Lorem ipsum dolor sit amet
    </Card>
  );
}
export function OverridingComponents(props: ComponentStory<typeof Card>) {
  return (
    <Card
      sx={{
        width: 300,
        height: 300,
        padding: 1,
        backgroundColor: 'primary',
        display: 'flex',
      }}
      {...props}
    >
      <Box
        sx={{
          p: 2,
          mt: 'auto',
          width: 1,
          border: '1px dashed grey',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Button>Save</Button>
        <Button>Cancel</Button>
      </Box>
    </Card>
  );
}
