import { action } from 'easy-peasy';
// import storage from '../storage/PlaylistStorage';
const favoritePlaylistModel = {
  items: [],
  filterFavoriteText: '',
  addItems: action((state, payload) => {
    const favItems = state.items;
    if (favItems.includes(payload)) return;
    favItems.push(payload);
    if (favItems.length > 4) {
      favItems.shift(payload);
    }
  }),

  removeFavorite: action((state, payload) => {
    const favItems = state.items;
    const filterFav = favItems.filter((i) => i !== payload);
    return filterFav;
  }),
  setFilterFavorite: action((state, payload) => {
    state.filterFavoriteText = '';
    state.filterFavoriteText = payload;
  }),
};
export default favoritePlaylistModel;
