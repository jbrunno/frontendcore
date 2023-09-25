import React from 'react';
import { render } from '@test-utils/component-testing';
import { CopyToClipboardButton } from './CopyToClipboardButton';

test('renders the CopyToClipboardButton', () => {
  const { container } = render(
    <CopyToClipboardButton text="teste" tooltip="teste" />,
  );
  expect(container).toMatchSnapshot();
});
