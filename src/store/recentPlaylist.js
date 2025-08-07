import { action } from 'easy-peasy';
import storage from '../storage/PlaylistStorage';

const recentPlaylistModel = {
  items: [],
  addItems: action((state, payload) => {
    if (state.items.includes(payload)) {
      const reAssignment = state.items.filter((i) => i !== payload);
      reAssignment.unshift(payload);
      storage.setRecentPlaylist(reAssignment);
      return (state.items = reAssignment);
    }
    if (state.items.length >= 3) {
      state.items.unshift(payload);
      state.items.pop();
      storage.setRecentPlaylist(state.items);
      return;
    }
    state.items.unshift(payload);
    storage.setRecentPlaylist(state.items);
    return;
  }),
};
export default recentPlaylistModel;
