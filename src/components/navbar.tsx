import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface NavProps {
  setShowData: (value: boolean) => void;
}

export default function SimpleBottomNavigation({setShowData} : NavProps) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ paddingBottom: "1rem" }} style={{margin: "auto"}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={() => setShowData(true)} label="Products" icon={<RestoreIcon />} />
        <BottomNavigationAction onClick={() => setShowData(false)} label="Cart" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
