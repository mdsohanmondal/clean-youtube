const PLAYLIST_KEY = '__cl__youtube_playlists';
const RECENT_PLAYING_PLAYLIST_KEY = '__recent__playing__playlist';
const ADD_FAVORITE_PLAYLIST_KEY = '__add__favorite__playlist';
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
  removePastFavoritePlaylist() {
    localStorage.removeItem(ADD_FAVORITE_PLAYLIST_KEY);
  }
}

const storage = new PlaylistStorage();
export default storage;
