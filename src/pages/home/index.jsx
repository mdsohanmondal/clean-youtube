import { useStoreState } from 'easy-peasy';
import PlaylistCard from '../../components/cards/playlist-card';
import { Box } from '@mui/joy';

const Home = () => {
  const playlist = useStoreState((state) => state.playlist.data);
  const playlistItems = Object.values(playlist);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridColumnGap: '2rem',
        gridRowGap: '2rem',
        padding: '5rem 10rem',
      }}
    >
      {playlistItems &&
        playlistItems.map((item) => (
          <PlaylistCard
            key={item.playlistId}
            imageSrc={item.playlistThumbnails.url}
            playlistTitle={item.playlistTitle}
            playlistDescription={item.playlistDescription}
            playlistId={item.playlistId}
          />
        ))}
    </Box>
  );
};
export default Home;
