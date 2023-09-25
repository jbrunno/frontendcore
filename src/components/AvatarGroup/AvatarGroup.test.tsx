import React from 'react';
import { render } from '@test-utils/component-testing';
import AvatarGroup from './AvatarGroup';
import Avatar from '../Avatar/Avatar';

test('renders the AvatarGroup', () => {
  const { container } = render(
    <AvatarGroup max={3}>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </AvatarGroup>,
  );
  expect(container).toMatchSnapshot();
});
