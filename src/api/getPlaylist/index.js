import axios from 'axios';
const KEY = 'AIzaSyC0cnvctjhlagfpoaAXu5Dl_bHUWJIAddc';
const getPlaylistItems = async (playlistId, pageToken = '', items = []) => {
  try {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&pageToken=${pageToken}&playlistId=${playlistId}&key=${KEY}`
    );
    items = [...items, ...data.items];
    if (data.nextPageToken) {
      items = getPlaylistItems(playlistId, data.nextPageToken, items);
    }
    return items;
  } catch (err) {
    console.log(err);
  }
};

const getPlaylist = async (playlistId) => {
  try {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=id%2CcontentDetails%2Csnippet%2Cstatus&id=${playlistId}&key=${KEY}`
    );
    const {
      channelId,
      channelTitle,
      title,
      description,
      thumbnails: { medium },
    } = data.items[0].snippet;

    const playlistItems = await getPlaylistItems(playlistId);
    const playlistItemsDetails = playlistItems.map((item) => {
      const {
        description,
        position,
        publishedAt,
        title,
        thumbnails: { medium },
        resourceId: { videoId },
      } = item.snippet;
      return { description, position, publishedAt, title, medium, videoId };
    });

    return {
      playlistId,
      channelId,
      channelTitle,
      playlistTitle: title,
      playlistDescription: description,
      playlistThumbnails: medium,
      items: [...playlistItemsDetails],
    };
  } catch (error) {
    console.error('Error fetching playlist items:', error);
  }
};
export default getPlaylist;
