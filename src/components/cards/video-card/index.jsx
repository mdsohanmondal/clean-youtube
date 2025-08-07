import { CiMenuKebab } from 'react-icons/ci';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

// ==== Styled Components ====

const Parent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
  margin: 0.4rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Thumbnail = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: 45px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const H1 = styled.h1`
  font-size: 13px;
  font-weight: 600;
  color: #222;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const P = styled.p`
  font-size: 10px;
  color: #666;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MenuBar = styled.div`
  margin-left: auto;

  button {
    min-width: 0;
    padding: 2px;
  }
`;

// ==== Main Component ====

const VideoCard = ({ videoId, title, thumbnail, publishedAt, playlistId }) => {
  const setRecent = useStoreActions((state) => state.recentPlaylist.addItems);

  return (
    <Link
      to={`/playlist-watch/${videoId}`}
      onClick={() => setRecent(playlistId)}
      style={{ textDecoration: 'none' }}
    >
      <Parent>
        <Thumbnail>
          <Img src={thumbnail?.url} alt={title} />
        </Thumbnail>

        <VideoDetails>
          <H1>{title}</H1>
          <P>Stack Learner • {publishedAt} years ago</P>
        </VideoDetails>

        <MenuBar>
          <Button>
            <CiMenuKebab size={18} />
          </Button>
        </MenuBar>
      </Parent>
    </Link>
  );
};

export default VideoCard;
