import { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';
import BottomNavigation, { BottomNavigationProps } from '../BottomNavigation';
import Box from '../../Box/Box';
import BottomNavigationAction from '../../BottomNavigationAction/BottomNavigationAction';

export default {
  id: 'bottomNavigation',
  component: BottomNavigation,
  title: 'Navigation/BottomNavigation',
} as ComponentMeta<typeof BottomNavigation>;

export const Default: ComponentStory<typeof BottomNavigation> = (
  props: BottomNavigationProps,
) => {
  const [actionIndex, setActionIndex] = useState(0);
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={actionIndex}
        {...props}
        onChange={(event, newValue) => {
          setActionIndex(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
};

enum LabeledTypes {
  Recents = 'recents',
  Favorites = 'favorites',
  Nearby = 'nearby',
  Folder = 'folder',
}

export const LabelBottomNavigation: ComponentStory<typeof BottomNavigation> = (
  props: BottomNavigationProps,
) => {
  const [label, setLabel] = useState<LabeledTypes>(LabeledTypes.Recents);

  return (
    <BottomNavigation
      sx={{ width: 500 }}
      value={label}
      {...props}
      onChange={(event, newValue) => {
        setLabel(newValue);
      }}
    >
      <BottomNavigationAction
        label="Recents"
        value={LabeledTypes.Recents}
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value={LabeledTypes.Favorites}
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value={LabeledTypes.Nearby}
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Folder"
        value={LabeledTypes.Folder}
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
};
