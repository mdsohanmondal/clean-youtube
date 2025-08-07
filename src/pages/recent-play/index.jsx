import { Typography } from '@mui/joy';
import { Box } from '@mui/material';
import PlaylistCard from '../../components/cards/playlist-card';
import { useStoreState } from 'easy-peasy';
const RecentPlayPlaylist = () => {
  const recentPlayedData = useStoreState((state) => state.recentPlaylist.items);
  const playlistData = useStoreState((state) => state.playlist.data);
  const recentPlaylistItems = recentPlayedData
    ? recentPlayedData.map((id) => playlistData[id])
    : [];

  return (
    <>
      <Box sx={{ padding: '5rem 4rem' }}>
        <Typography
          variant="h1"
          sx={{ textAlign: 'center', fontSize: '1.5rem', color: '#000' }}
        >
          Histories
        </Typography>
        <Box
          sx={{
            padding: '5rem 3rem',
            gap: '1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gridColumnGap: '2rem',
            gridRowGap: '2rem',
          }}
        >
          {recentPlaylistItems.length > 0 ? (
            recentPlaylistItems.map((items) => (
              <PlaylistCard
                imageSrc={items?.playlistThumbnails.url}
                playlistTitle={items?.playlistTitle}
                playlistDescription={items?.playlistDescription}
                playlistId={items?.playlistId}
              />
            ))
          ) : (
            <Typography>No played playlist histories</Typography>
          )}
        </Box>
      </Box>
    </>
  );
};
export default RecentPlayPlaylist;
