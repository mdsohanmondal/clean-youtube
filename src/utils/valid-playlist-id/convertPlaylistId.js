/**
 * write your any url of youtube playlist.
 * this function return any playlist id
 *
 * @param {URL} link
 */

function convertValidUrl(link) {
  try {
    const url = new URL(link);
    const id = url.searchParams.get('list');
    return id;
  } catch (e) {
    return link;
  }
}

export default convertValidUrl;
