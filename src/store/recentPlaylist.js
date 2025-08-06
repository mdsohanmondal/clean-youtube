import { action } from 'easy-peasy';

const recentPlaylistModel = {
  items: [],
  addItems: action((state, payload) => {
    state.items.unshift(payload);
  }),
};
export default recentPlaylistModel;
