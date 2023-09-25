import { render } from '@test-utils/component-testing';
import { Tabs } from './Tabs';

test('renders the Tabs', () => {
  const mock = {
    handleChange: jest.fn(),
    value: 1,
    children: <>mock children</>,
    tabName: {
      firstTab: 'Mock First Tab',
      secondTab: 'Mock Second Tab',
      thirdTab: 'Mock Third Tab',
    },
  };

  const { container } = render(
    <Tabs
      handleChange={mock.handleChange}
      noTabPanel
      tabNames={mock.tabName}
      value=""
    >
      {mock.children}
    </Tabs>,
  );
  expect(container).toMatchSnapshot();
});
