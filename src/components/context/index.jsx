import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';

const ITEM_HEIGHT = 48;

const ContextMenu = ({ setIsPopupOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          position: 'absolute',
          top: '0.3rem',
          right: '0.3rem',
          zIndex: 99,
          color: '#fff',
          width: '2rem',
          height: '2rem',
          boxShadow: '0 0 2px #bdbdbd',
          backdropFilter: 'unset',
          mixBlendMode: 'difference',
        }}
      >
        <CiMenuKebab />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
          list: {
            'aria-labelledby': 'long-button',
          },
        }}
      >
        <MenuItem color="black" onClick={() => setIsPopupOpen(true)}>
          Remove playlist
        </MenuItem>
      </Menu>
    </div>
  );
};
export default ContextMenu;
