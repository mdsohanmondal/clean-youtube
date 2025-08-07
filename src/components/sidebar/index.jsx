import { Box, Button, Typography } from '@mui/material';
import { useStoreActions } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
          justifyContent: 'baseline',
          flexDirection: 'column',
          gap: '0.5rem',
          margin: '0.5rem 0',
          height: '60vh',
        }}
      >
        <Button
          sx={{ maxWidth: '6rem', minWidth: '6rem' }}
          onClick={() => setFilterBy('all')}
          size="small"
          color="secondary"
          variant={filterBy === 'all' ? 'contained' : 'text'}
        >
          All
        </Button>
        <Button
          sx={{ maxWidth: '6rem', minWidth: '6rem' }}
          onClick={() => setFilterBy('favorite')}
          size="small"
          variant={filterBy === 'favorite' ? 'contained' : 'outlined'}
          color="success"
        >
          Favorite
        </Button>
        <Button
          sx={{ maxWidth: '6rem', minWidth: '6rem' }}
          onClick={() => setFilterBy('unfavorite')}
          size="small"
          variant={filterBy === 'unfavorite' ? 'contained' : 'outlined'}
          color="error"
        >
          Unfavorite
        </Button>
      </Box>
      <Link to={'/recent-play-play-lits'}>
        <Button size="small" variant="outlined" color="info">
          History
        </Button>
      </Link>
    </Box>
  );
};
export default Sidebar;
