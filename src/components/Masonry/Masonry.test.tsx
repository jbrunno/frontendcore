import React from 'react';
import { render } from '@test-utils/component-testing';
import Masonry from './Masonry';

test('renders the Masonry', () => {
  const { container } = render(
    <Masonry
      columns={4}
      spacing={2}
      defaultHeight={450}
      defaultColumns={4}
      defaultSpacing={1}
    >
      <div>teste 1</div>
      <div>teste 2</div>
    </Masonry>,
  );
  expect(container).toMatchSnapshot();
});
