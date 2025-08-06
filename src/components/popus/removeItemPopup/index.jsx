import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useStoreActions } from 'easy-peasy';
const RemoveItemPopup = ({ isPopupOpen, setIsPopupOpen, playlistId }) => {
  const removePlaylist = useStoreActions((state) => state.playlist.removeData);
  const handleClose = () => {
    setIsPopupOpen(false);
  };
  const handleDelete = () => {
    removePlaylist(playlistId);
    handleClose();
  };
  return (
    <>
      <Dialog
        open={isPopupOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ position: 'absolute', top: 0, left: 0 }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete the playlist item
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No! stay ther</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes! Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default RemoveItemPopup;
