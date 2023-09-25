import React from 'react';
import { render } from '@test-utils/component-testing';
import { Share as ShareIcon } from '@mui/icons-material';
import { SpeedDial } from '../SpeedDial/SpeedDial';
import Box from '../Box/Box';
import SpeedDialAction from '../SpeedDialAction/SpeedDialAction';
import SpeedDialIcon from './SpeedDialIcon';

test('renders the SpeedDial', () => {
  const { container } = render(
    <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
      <SpeedDial
        ariaLabel="SpeedDial playground example"
        icon={<SpeedDialIcon openIcon={<ShareIcon />} />}
        direction="up"
      >
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Teste" />
      </SpeedDial>
    </Box>,
  );
  expect(container).toMatchSnapshot();
});
