import type { ComponentMeta, ComponentStory } from '@storybook/react';
import FaceIcon from '@mui/icons-material/Face';
import { Chip } from '../Chip';

export default {
  id: 'chip',
  title: 'Data Display/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

export function Default(props: ComponentStory<typeof Chip>) {
  return (
    <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" {...props} />
  );
}
