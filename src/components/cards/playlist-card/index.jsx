import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import {
  MdFavoriteBorder,
  MdOutlineFavorite,
  MdOutlinePauseCircle,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';
import ContextMenu from '../../context';
import RemoveItemPopup from '../../popus/removeItemPopup';
import { Box } from '@mui/material';
import { useState } from 'react';
const PlaylistCard = ({
  imageSrc,
  playlistTitle,
  playlistDescription,
  playlistId,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const addFavoriteId = useStoreActions(
    (state) => state.favoritesPlaylist.addItems
  );

  const favoritePlaylist = useStoreState(
    (state) => state.favoritesPlaylist.items
  );

  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: '400px',
        maxHeight: '400px',
        position: 'relative',
      }}
    >
      <CardActionArea>
        <Box>
          <RemoveItemPopup
            setIsPopupOpen={setIsPopupOpen}
            isPopupOpen={isPopupOpen}
            playlistId={playlistId}
          />
        </Box>
        <ContextMenu setIsPopupOpen={setIsPopupOpen} />
        {/* </Button> */}
        <CardMedia
          component="img"
          image={imageSrc}
          alt="green iguana"
          sx={{
            maxHeight: '200px',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {playlistTitle}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {`${
              playlistDescription
                ? playlistDescription.length > 50 && playlistDescription
                  ? `${playlistDescription.slice(0, 50)}.See more`
                  : playlistDescription
                : playlistDescription
            }`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          gap: '4rem',
          bottom: 0,
          position: 'absolute',
          left: 0,
          width: '100%',
        }}
      >
        <Link to={`/playlist-items/${playlistId}`}>
          <Button
            size="small"
            color="primary"
            className="flex items-center justify-center"
          >
            <MdOutlinePauseCircle className="text-sm" />
            <span className="text-[12px] m-1">view</span>
          </Button>
        </Link>
        <Button
          size="small"
          color="primary"
          className="flex items-center justify-center"
          onClick={() => addFavoriteId(playlistId)}
        >
          {favoritePlaylist?.includes(playlistId) ? (
            <>
              <MdOutlineFavorite className="text-red-500" />
              <span className="text-[12px] m-1 text-red-500">favoured</span>
            </>
          ) : (
            <>
              <MdFavoriteBorder className="text-sm text-black" />
              <span className="text-[12px] m-1 text-gray-500">
                add favorite
              </span>
            </>
          )}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaylistCard;
