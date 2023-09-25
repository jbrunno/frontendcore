import { useScreenPermissions } from '@/hooks/useScreenPermissions';
import { useWalletPermissions } from '@/hooks/useWalletPermissions';
import { PropsWithChildren } from 'react';

type RenderComponentsProps = {
  screen: string;
};

export function RenderComponents({
  children,
  screen,
}: PropsWithChildren<RenderComponentsProps>) {
  const { screenPermissions } = useScreenPermissions(screen);
  const { walletPermissions } = useWalletPermissions(screen);

  return (
    <>
      {(children as Array<JSX.Element>).map((component) => {
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
      })}
    </>
  );
}

export default RenderComponents;
