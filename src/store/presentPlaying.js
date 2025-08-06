import { action } from 'easy-peasy';
import storage from '../storage/PlaylistStorage';

const presentPlayingModel = {
  presentPlayingItems: [storage.setPresentPlayingPlaylist()],
  setItems: action((state, payload) => {
    state.presentPlayingItems = [...payload];
    storage.setPresentPlayingPlaylist(state.presentPlayingItems);
    return state;
  }),
};
export default presentPlayingModel;
