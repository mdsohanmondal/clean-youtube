import { action, persist, thunk } from 'easy-peasy';
import getPlaylist from '../api/getPlaylist';
import storage from '../storage/PlaylistStorage';

const playlistModels = {
  data: { ...storage.getStorage() },
  addData: action((state, payload) => {
    state.data = { ...state.data, [payload.playlistId]: { ...payload } };
    storage.setStorage(state.data);
    return state;
  }),
  fetchData: persist(
    thunk(async (action, playlistId) => {
      const isExist = storage.getStorage();
      if (isExist[playlistId]) {
        return;
      }

      const getData = await getPlaylist(playlistId);
      action.addData(getData);
    })
  ),
};

export default playlistModels;
