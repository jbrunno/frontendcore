import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../../Box/Box';

import { Container } from '../Container';

export default {
  id: 'Container',
  title: 'Component API/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const Default: ComponentStory<typeof Container> = (props) => (
  <Container maxWidth="sm" {...props}>
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
  </Container>
);
