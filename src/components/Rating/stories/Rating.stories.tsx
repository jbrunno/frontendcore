import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Star as StarIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';
import { Rating } from '../Rating';
import Box from '../../Box/Box';

export default {
  id: 'rating',
  title: 'Inputs/Rating',
  component: Rating,
  argTypes: {
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    highlightSelectedOnly: { control: 'boolean' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
  },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  value: 3,
};

export const WithPrecision = Template.bind({});
WithPrecision.args = {
  title: 'WithPrecision',
  value: 3.5,
  precision: 0.5,
};

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export const WithLabel: ComponentStory<typeof Rating> = (args) => {
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        {...args}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
};

export const CustomizedIcon = Template.bind({});
CustomizedIcon.args = {
  title: 'CustomizedIcon',
  value: 3.5,
  precision: 0.5,
  icon: <FavoriteIcon fontSize="inherit" />,
  emptyIcon: <FavoriteBorderIcon fontSize="inherit" />,
};
