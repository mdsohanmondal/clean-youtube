/**
 * write your any url of youtube playlist.
 * this function return any playlist id
 *
 * @param {URL} link
 */

function convertValidUrl(link) {
  const url = new URL(link);
  try {
    const id = url.searchParams.get('list');
    return id;
  } catch (e) {
    return link;
  }
}

export default convertValidUrl;
