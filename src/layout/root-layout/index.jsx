import { Box } from '@mui/material';
import Navbar from '../../components/navbar';
import Home from '../../pages/home';
import PlaylistItems from '../../pages/playlist-items';
import VideoPlayer from '../../pages/video-player';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InputUrlForm from '../../components/input-url/InputUrlPopup';
import { useState } from 'react';

const RootLayout = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <BrowserRouter>
        <Box sx={{ width: '100vw' }}>
          <Navbar setOpen={setOpen} />
          <Box>
            {open && <InputUrlForm handleClose={handleClose} isOpen={open} />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/playlist-items/:playlistId"
                element={<PlaylistItems />}
              />
              <Route
                path="/playlist-watch/:videoId"
                element={<VideoPlayer />}
              />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </div>
  );
};
export default RootLayout;
