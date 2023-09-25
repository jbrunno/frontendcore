import { render } from '@test-utils/component-testing';
import { Typography } from '../Typography/Typography';
import { RenderComponent } from './RenderComponent';

jest.mock('@/hooks', () => ({
  ...jest.requireActual('@/hooks'),
  useScreenPermissions: () => ({
    screenPermissions: ['DASHBOARD_ICM'],
  }),
  useWalletPermissions: () => ({
    walletPermissions: ['PHONE'],
  }),
}));

test('renders the RenderComponent', () => {
  const { container } = render(
    <RenderComponent screen="dashboard">
      <Typography perm="DASHBOARD_ICM" w-perm="PHONE" variant="h1">
        Começa no próximo component...
      </Typography>
    </RenderComponent>,
  );
  expect(container).toMatchSnapshot();
});
