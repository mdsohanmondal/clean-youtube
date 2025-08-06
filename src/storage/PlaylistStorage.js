const PLAYLIST_KEY = '__cl__youtube_playlists';
const RECENT_PLAYING_PLAYLIST_KEY = '__RECENT__PLAYING__PLAYLIST__KEY';
const ADD_FAVORITE_PLAYLIST_KEY = '__ADD__FAVORITE__PLAYLIST__KEY';
class PlaylistStorage {
  setStorage(playlist) {
    localStorage.setItem(PLAYLIST_KEY, JSON.stringify(playlist));
  }
  getStorage() {
    return JSON.parse(localStorage.getItem(PLAYLIST_KEY));
  }
  setPresentPlayingPlaylist(items) {
    localStorage.removeItem(RECENT_PLAYING_PLAYLIST_KEY);
    localStorage.setItem(RECENT_PLAYING_PLAYLIST_KEY, JSON.stringify(items));
  }
  getPresentPlayingPlaylist() {
    return localStorage.getItem(RECENT_PLAYING_PLAYLIST_KEY);
  }
  setFavoritePlaylist(items) {
    localStorage.setItem(ADD_FAVORITE_PLAYLIST_KEY, JSON.stringify(items));
  }
  getFavoritePlaylist() {
    return JSON.parse(localStorage.getItem(ADD_FAVORITE_PLAYLIST_KEY));
  }
  // removeFavoritePlaylist(id) {

  // }
}

const storage = new PlaylistStorage();
export default storage;
