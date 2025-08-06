import { action } from 'easy-peasy';
import storage from '../storage/PlaylistStorage';
const favoritePlaylistModel = {
  items: [storage.getFavoritePlaylist()],
  addItems: action((state, payload) => {
    state.items.push(payload);
    storage.setFavoritePlaylist(state.items);
    if (state.items.length > 3) {
      state.items.slice(-1);
      storage.setFavoritePlaylist(state.items);
    }
    return state;
  }),
};
export default favoritePlaylistModel;
