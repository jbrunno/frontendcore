import { useState, MouseEvent } from 'react';
import { PopperPlacementType } from '@mui/material';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popper } from '../Popper';
import Box from '../../Box/Box';
import Paper from '../../Paper/Paper';
import Typography from '../../Typography/Typography';
import Grid from '../../Grid/Grid';
import Button from '../../Button/Button';

export default {
  id: 'Popper',
  title: 'Utils/Popper',
  component: Popper,
} as ComponentMeta<typeof Popper>;

export const Default: ComponentStory<typeof Popper> = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [placement, setPlacement] = useState<PopperPlacementType>();
  const open = Boolean(anchorEl);

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setPlacement(newPlacement);
    };

  return (
    <Box sx={{ width: 500 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        <Paper>
          <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
        </Paper>
      </Popper>
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick('top-start')}>top-start</Button>
          <Button onClick={handleClick('top')}>top</Button>
          <Button onClick={handleClick('top-end')}>top-end</Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Button onClick={handleClick('left-start')}>left-start</Button>
          <br />
          <Button onClick={handleClick('left')}>left</Button>
          <br />
          <Button onClick={handleClick('left-end')}>left-end</Button>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Button onClick={handleClick('right-start')}>right-start</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClick('right')}>right</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClick('right-end')}>right-end</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick('bottom-start')}>bottom-start</Button>
          <Button onClick={handleClick('bottom')}>bottom</Button>
          <Button onClick={handleClick('bottom-end')}>bottom-end</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
