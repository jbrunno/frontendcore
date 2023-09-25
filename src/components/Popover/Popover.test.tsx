import { render } from '@test-utils/component-testing';
import React, { MouseEvent, useState } from 'react';
import { Popover } from './Popover';
import Typography from '../Typography/Typography';
import Box from '../Box/Box';
import Button from '../Button/Button';

test('renders the Popover', () => {
  function PopoverElement() {
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
  }
  const { container } = render(<PopoverElement />);
  expect(container).toMatchSnapshot();
});
