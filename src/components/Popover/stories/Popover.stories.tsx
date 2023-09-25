import { MouseEvent, useState } from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popover } from '../Popover';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';
import Box from '../../Box/Box';
import RadioGroup from '../../RadioGroup/RadioGroup';
import Grid from '../../Grid/Grid';
import FormControlLabel from '../../FormControlLabel/FormControlLabel';
import Radio from '../../Radio/Radio';

export default {
  id: 'popover',
  title: 'Utils/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Default: ComponentStory<typeof Popover> = (props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <Button variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        {...props}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </Box>
  );
};

type VerticalPosition = 'top' | 'center' | 'bottom';
type HorizontalPosition = 'left' | 'center' | 'right';

type OriginType = {
  vertical: VerticalPosition;
  horizontal: HorizontalPosition;
};

export const Positions: ComponentStory<typeof Popover> = (props) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [anchor, setAnchor] = useState<OriginType>({
    vertical: 'bottom',
    horizontal: 'right',
  });
  const [transform, setTransform] = useState<OriginType>({
    vertical: 'top',
    horizontal: 'right',
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const radioInputsVertical = (
    <>
      <FormControlLabel value="top" control={<Radio />} label="Top" />
      <FormControlLabel value="center" control={<Radio />} label="Center" />
      <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />
    </>
  );

  const radioInputsHorizontal = (
    <>
      <FormControlLabel value="left" control={<Radio />} label="Left" />
      <FormControlLabel value="center" control={<Radio />} label="Center" />
      <FormControlLabel value="right" control={<Radio />} label="Right" />
    </>
  );

  const buttons = (
    <Grid container xs={12} spacing={2}>
      <Grid item xs={6}>
        <Typography color="gray" variant="inputLabel">
          anchorOrigin.vertical:
        </Typography>
        <RadioGroup
          onChange={(event) =>
            setAnchor((state) => ({
              ...state,
              vertical: event.target.value as VerticalPosition,
            }))
          }
        >
          {radioInputsVertical}
        </RadioGroup>
        <Typography color="gray" variant="inputLabel">
          anchorOrigin.horizontal:
        </Typography>
        <RadioGroup
          onChange={(event) =>
            setAnchor((state) => ({
              ...state,
              horizontal: event.target.value as HorizontalPosition,
            }))
          }
        >
          {radioInputsHorizontal}
        </RadioGroup>
      </Grid>
      <Grid item xs={6}>
        <Typography color="gray" variant="inputLabel">
          transformOrigin.vertical:
        </Typography>
        <RadioGroup
          onChange={(event) =>
            setTransform((state) => ({
              ...state,
              vertical: event.target.value as VerticalPosition,
            }))
          }
        >
          {radioInputsVertical}
        </RadioGroup>
        <Typography color="gray" variant="inputLabel">
          transformOrigin.horizontal:
        </Typography>
        <RadioGroup
          onChange={(event) =>
            setTransform((state) => ({
              ...state,
              horizontal: event.target.value as HorizontalPosition,
            }))
          }
        >
          {radioInputsHorizontal}
        </RadioGroup>
      </Grid>
    </Grid>
  );

  return (
    <Box>
      <Button variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        {...props}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchor}
        transformOrigin={transform}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
      {buttons}
    </Box>
  );
};
