import { Box, Button, Typography } from '@mui/material';
import { useStoreActions } from 'easy-peasy';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [filterBy, setFilterBy] = useState('all');
  const setFavoriteFilterVal = useStoreActions(
    (state) => state.favoritesPlaylist.setFilterFavorite
  );
  useEffect(() => {
    setFavoriteFilterVal(filterBy);
  }, [filterBy]);
  return (
    <Box
      sx={{
        width: '10vw',
        height: '30vh',
        border: '1px soilid green',
        position: 'absolute',
        top: '80px',
        left: '0',
        padding: '0.5rem 1rem',
      }}
    >
      <Typography variant="h5">Filter:</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '0.5rem',
          margin: '0.5rem 0',
        }}
      >
        <Button
          onClick={() => setFilterBy('all')}
          size="small"
          color="secondary"
          variant={filterBy === 'all' ? 'contained' : 'text'}
        >
          All
        </Button>
        <Button
          onClick={() => setFilterBy('favorite')}
          size="small"
          variant={filterBy === 'favorite' ? 'contained' : 'outlined'}
          color="success"
        >
          Favorite
        </Button>
        <Button
          onClick={() => setFilterBy('unfavorite')}
          size="small"
          variant={filterBy === 'unfavorite' ? 'contained' : 'outlined'}
          color="error"
        >
          Unfavorite
        </Button>
      </Box>
    </Box>
  );
};
export default Sidebar;
