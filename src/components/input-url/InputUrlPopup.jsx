import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import convertValidUrl from '../../utils/valid-playlist-id/convertPlaylistId';
import { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

const InputUrlForm = ({ handleClose, isOpen }) => {
  const [playlistUrl, setPlaylistUrl] = useState('');
  const addPlaylist = useStoreActions((state) => state.playlist.fetchData);
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = convertValidUrl(playlistUrl);
    addPlaylist(url);
    setPlaylistUrl('');
    handleClose();
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you interest to a playlist link add to this site. You can see
            your favorite playlist
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="playlistUrl"
              name="playlistUrl"
              label="Enter Playlist URL"
              type="text"
              fullWidth
              variant="standard"
              value={playlistUrl}
              onChange={(e) => setPlaylistUrl(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button type="submit" form="subscription-form">
            add playlist
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default InputUrlForm;
