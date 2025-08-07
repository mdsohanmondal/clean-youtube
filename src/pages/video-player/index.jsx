/* eslint-disable no-unsafe-optional-chaining */
import { Box, Container, Typography } from '@mui/material';
import VideoCard from '../../components/cards/video-card';
import { useStoreState } from 'easy-peasy';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
  const playlistItems = useStoreState(
    (state) => state.presentPlaying.presentPlayingItems
  );

  const { videoId } = useParams();

  const { description, title } =
    (playlistItems && playlistItems.find((item) => item.videoId === videoId)) ||
    {};

  return (
    <Container maxWidth="lg" sx={{ mt: 5, px: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 3,
          gap: 2,
        }}
      >
        {/* Video Player */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: '100%',
              maxWidth: '1000px',
              aspectRatio: '16 / 9',
              border: 'none',
            }}
          />
        </Box>

        {/* Video Info + Sidebar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            alignItems: {
              xs: 'flex-start',
              md: 'baseline',
            },
            justifyContent: 'space-between',
            width: '100%',
            minHeight: '100vh',
            gap: 4,
          }}
        >
          {/* Left: Title & Description */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                whiteSpace: 'pre-wrap',
              }}
            >
              {description}
            </Typography>
          </Box>

          {/* Right: Related Video List */}
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '40%',
              },
              maxHeight: {
                xs: 'auto',
                md: '100vh',
              },
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              overflowY: {
                xs: 'visible',
                md: 'auto',
              },
            }}
          >
            {playlistItems &&
              playlistItems.map((item) => (
                <Box key={item.publishedAt}>
                  <VideoCard
                    variant="small"
                    title={item.title}
                    thumbnail={item.medium}
                    publishedAt={item.publishedAt}
                    videoId={item.videoId}
                  />
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default VideoPlayer;
