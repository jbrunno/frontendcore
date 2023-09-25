import { render } from '@test-utils/component-testing';
import { Typography } from '../Typography/Typography';
import { RenderComponents } from './RenderComponents';

jest.mock('@/hooks', () => ({
  ...jest.requireActual('@/hooks'),
  useScreenPermissions: () => ({
    screenPermissions: ['DASHBOARD_ICM'],
  }),
  useWalletPermissions: () => ({
    walletPermissions: ['PHONE'],
  }),
}));

test('renders the RenderComponents', () => {
  const { container } = render(
    <RenderComponents screen="dashboard">
      <Typography perm="DASHBOARD_ICM" w-perm="PHONE" variant="h1">
        Aprove essa PR
      </Typography>
      <Typography perm="DASHBOARD_ICM" w-perm="PHONE" variant="h1">
        Não seja um Jefferson, vc não tem oq comentar aqui!
      </Typography>
    </RenderComponents>,
  );
  expect(container).toMatchSnapshot();
});
