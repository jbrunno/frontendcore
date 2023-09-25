import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dialog } from '../Dialog';
import Typography from '../../Typography/Typography';
import { Button } from '../../Button/Button';
import { Card } from '../../Card/Card';

export default {
  id: 'dialog',
  title: '@crm/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

export function Default(props: ComponentStory<typeof Dialog>) {
  return (
    <Dialog open onClose={() => null} {...props}>
      <Card
        sx={{
          width: 300,
          padding: 2,
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
          corrupti autem? Ab et consequuntur, eius velit id officiis sapiente
          repellendus modi perferendis explicabo dolor voluptates, consectetur
          eaque molestiae optio deleniti.
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
          Confirmar
        </Button>
      </Card>
    </Dialog>
  );
}
