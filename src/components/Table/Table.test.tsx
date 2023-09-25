import { render } from '@test-utils/component-testing';
import { Table } from './Table';

test('renders the Table', () => {
  const mock = {
    bodyData: [{ data: 'Mocked Data' }],
    children: (row: Record<'data', string>) => row.data,
  };

  const { container } = render(
    <Table bodyData={mock.bodyData}>{(row) => mock.children(row)}</Table>,
  );
  expect(container).toMatchSnapshot();
});
