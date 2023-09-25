import { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BottomNavigationAction, {
  BottomNavigationActionProps,
} from '../BottomNavigationAction';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';

export default {
  id: 'bottomNavigationAction',
  title: 'Component API/BottomNavigationAction',
  component: BottomNavigationAction,
} as ComponentMeta<typeof BottomNavigationAction>;

export const Default: ComponentStory<typeof BottomNavigationAction> = (
  props: BottomNavigationActionProps,
) => {
  const [actionIndex, setActionIndex] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={actionIndex}
      onChange={(event, newValue) => {
        setActionIndex(newValue);
      }}
    >
      <BottomNavigationAction
        label="Action"
        icon={<RestoreIcon />}
        {...props}
      />
      <BottomNavigationAction
        label="Other Action"
        icon={<FavoriteIcon />}
        {...props}
      />
    </BottomNavigation>
  );
};
