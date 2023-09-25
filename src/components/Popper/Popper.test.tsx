import { render } from '@test-utils/component-testing';
import Paper from '../Paper/Paper';
import Typography from '../Typography/Typography';
import { Popper } from './Popper';

test('renders the Popper', () => {
  const { container } = render(
    <Popper open transition>
      <Paper>
        <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
      </Paper>
    </Popper>,
  );
  expect(container).toMatchSnapshot();
});
