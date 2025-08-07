import { useStoreState } from 'easy-peasy';
import PlaylistCard from '../../components/cards/playlist-card';
import { Box } from '@mui/joy';
import Sidebar from '../../components/sidebar';

const Home = () => {
  const playlist = useStoreState((state) => state.playlist.data);
  const playlistItems = Object.values(playlist);
  const filterState = useStoreState(
    (state) => state.favoritesPlaylist.filterFavoriteText
  );
  const favoritePlaylistId = useStoreState(
    (state) => state.favoritesPlaylist.items
  );

  const playlistItemByFiltered =
    filterState === 'all'
      ? playlistItems
      : filterState === 'favorite'
      ? playlistItems.filter((item) =>
          favoritePlaylistId.includes(item.playlistId)
        )
      : filterState === 'unfavorite'
      ? playlistItems.filter(
          (item) => !favoritePlaylistId.includes(item.playlistId)
        )
      : playlistItems;

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
      <Sidebar />
      {playlistItemByFiltered &&
        playlistItemByFiltered?.map((item) => (
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
