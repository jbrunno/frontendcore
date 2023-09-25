import { render } from '@test-utils/component-testing';
import { CardHeaderChip } from './CardHeaderChip';

describe('Testing <CardHeaderChip />', () => {
  it('should render <CardHeaderChip />', () => {
    const { container } = render(<CardHeaderChip />);
    expect(container).toMatchSnapshot();
  });
});
