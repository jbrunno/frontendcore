import { render } from '@test-utils/component-testing';
import { HeaderArray, TableHeader } from './TableHeader';

test('renders the TableHeader', () => {
  const mockHeaderData: HeaderArray<Record<'mockedData', { data: string }>> = [
    {
      id: 'mockedData',
      label: 'Mocked data',
      colSpan: 2,
    },
  ];

  const { container } = render(<TableHeader headerData={mockHeaderData} />);
  expect(container).toMatchSnapshot();
});
