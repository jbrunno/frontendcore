import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { styled } from '@mui/material/styles';
import Masonry from '../Masonry';
import Paper from '../../Paper/Paper';

export default {
  title: 'Lab/Masonry',
  component: Masonry,
} as ComponentMeta<typeof Masonry>;

export function Default(props: ComponentStory<typeof Masonry>) {
  const heights = [
    150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  function itemLabel(index: number) {
    return index + 1;
  }

  return (
    <Masonry
      columns={4}
      spacing={2}
      defaultHeight={450}
      defaultColumns={4}
      defaultSpacing={1}
      {...props}
    >
      {heights.map((height, index) => (
        <Item key={itemLabel(index)} sx={{ height }}>
          {itemLabel(index)}
        </Item>
      ))}
    </Masonry>
  );
}
