import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import MailIcon from '@mui/icons-material/Mail';
import { Zoom } from '../Zoom';
import FormControlLabel from '../../FormControlLabel/FormControlLabel';
import Switch from '../../Switch/Switch';
import Box from '../../Box/Box';

export default {
  title: 'Component API/Zoom',
  component: Zoom,
  argTypes: {
    in: { control: 'boolean' },
    appear: { control: 'boolean' },
  },
} as ComponentMeta<typeof Zoom>;

export const Default: ComponentStory<typeof Zoom> = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex' }}>
        <Zoom in={checked}>
          <MailIcon />
        </Zoom>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? '500ms' : '0ms' }}
        >
          <MailIcon />
        </Zoom>
      </Box>
    </Box>
  );
};
