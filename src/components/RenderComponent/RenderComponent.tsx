import { useScreenPermissions } from '@/hooks/useScreenPermissions';
import { useWalletPermissions } from '@/hooks/useWalletPermissions';
import { PropsWithChildren } from 'react';

type RenderComponentProps = {
  screen: string;
};

export function RenderComponent({
  children,
  screen,
}: PropsWithChildren<RenderComponentProps>) {
  const { screenPermissions } = useScreenPermissions(screen);
  const { walletPermissions } = useWalletPermissions(screen);
  const component = children as JSX.Element;

  if (component.props.perm && component.props['w-perm']) {
    return screenPermissions?.includes(component.props.perm) &&
      walletPermissions?.includes(component.props['w-perm'])
      ? component
      : null;
  }

  return screenPermissions?.includes(component.props.perm) ||
    walletPermissions?.includes(component.props['w-perm'])
    ? component
    : null;
}

export default RenderComponent;
