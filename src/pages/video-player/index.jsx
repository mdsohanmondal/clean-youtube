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
    playlistItems && playlistItems.find((item) => item.videoId === videoId);
  return (
    <Container maxWidth="lg" sx={{ mt: 5, padding: '1rem 1rem' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 3,
          gap: 2,
        }}
      >
        {/* Video Player */}
        <Box sx={{ width: '100vw' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: '90vw',
              height: '90vh',
              border: 'none',
            }}
          />
        </Box>

        {/* Video Cards Sidebar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            width: '100vw',
            minHeight: '100vh',
          }}
        >
          <Box>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="p" sx={{ margin: '4rem' }}>
              {description}
            </Typography>
          </Box>

          <Box
            sx={{
              minWidth: '40vw',
              maxWidth: '40vw',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              overflowY: 'auto',
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
