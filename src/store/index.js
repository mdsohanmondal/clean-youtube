import { createStore } from 'easy-peasy';
import playlistModels from './playlistItemsReducer';
import favoritePlaylistModel from './favoriteReducer';
import recentPlaylistModel from './recentPlaylist';
import presentPlayingModel from './presentPlaying';

const store = createStore({
  playlist: playlistModels,
  favoritesPlaylist: favoritePlaylistModel,
  recentPlaylist: recentPlaylistModel,
  presentPlaying: presentPlayingModel,
});
export default store;
