import React from 'react';
import { render } from '@test-utils/component-testing';
import Modal from './Modal';

test('renders the Modal', () => {
  const { container } = render(
    <Modal
      open
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>Text in a modal</div>
    </Modal>,
  );
  expect(container).toMatchSnapshot();
});
