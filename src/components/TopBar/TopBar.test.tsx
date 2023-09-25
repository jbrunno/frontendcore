import { render } from '@test-utils/component-testing';
import { TopBar } from './TopBar';

test('renders the TopBar', () => {
  const { container } = render(<TopBar />);
  expect(container).toMatchSnapshot();
});
