import { render } from '@test-utils/component-testing';
import { SnackbarContent } from './SnackbarContent';

test('renders the SnackbarContent', () => {
  const { container } = render(<SnackbarContent />);
  expect(container).toMatchSnapshot();
});
