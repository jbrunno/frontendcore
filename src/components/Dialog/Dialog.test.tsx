import React from 'react';
import { render } from '@test-utils/component-testing';
import { Stars as StarsIcon } from '@mui/icons-material';
import { Dialog } from './Dialog';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

test('renders the Dialog', () => {
  const { container } = render(
    <Dialog
      title="Dialog Title"
      titleIcon={<StarsIcon color="secondary" />}
      actions={[
        <Button color="primary" variant="contained" key="Button">
          Button
        </Button>,
      ]}
      open
      onClose={() => null}
    >
      <Typography>CRM Dialog</Typography>
    </Dialog>,
  );
  expect(container).toMatchSnapshot();
});
