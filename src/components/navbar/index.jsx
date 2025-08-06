import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { IoMenu, IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = ({ setOpen }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 99,

        backgroundColor: 'red',
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            width: '100vw',
            backgroundColor: 'white',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <IoMenu />
            </IconButton>
            <Link to={'/'}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: 'none',
                    sm: 'block',
                    backgroundColor: '#09bef5',
                    padding: '0.2rem 1rem',
                    color: '#fff',
                    borderRadius: '0.2rem',
                  },
                }}
              >
                Youtube
              </Typography>
            </Link>
          </Box>
          {/* <Search sx={{ border: '1px solid #09bef5' }}>
            <SearchIconWrapper>
              <IoSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Button variant="contained" onClick={handleClickOpen}>
            Add Playlist
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
