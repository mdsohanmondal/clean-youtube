import { CiMenuKebab } from 'react-icons/ci';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Parent = styled.div`
  width: ${(props) => (props.variant === 'small' ? '100%' : '60vw')};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: ${(props) => (props.variant === 'small' ? '0.4rem' : '0.8rem')};
  margin: 0.5rem 0;
  box-shadow: ${(props) =>
    props.variant === 'small' ? 'none' : '0 4px 10px rgba(0,0,0,0.1)'};
`;

const Thumbnail = styled.div`
  width: ${(props) => (props.variant === 'small' ? '80px' : '140px')};
  height: ${(props) => (props.variant === 'small' ? '50px' : '100px')};
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
`;

const VideoDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MenuBar = styled.div`
  margin-left: auto;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const P = styled.div`
  font-size: ${(props) => (props.variant === 'small' ? '10px' : '13px')};
  color: #757575;
`;

const H1 = styled.h1`
  font-size: ${(props) => (props.variant === 'small' ? '10px' : '18px')};
  font-weight: 600;
  margin: 0;
  color: #333;
`;

// key={item.videoId}
//                 videoId={item.videoId}
//                 description={item.description}
//                 position={item.position}
//                 title={item.title}
//                 thumbnail={item.medium}
//                 publishedAt={item.publishedAt}

const VideoCard = ({
  variant = 'normal',
  videoId,
  title,
  thumbnail,
  publishedAt,
}) => {
  return (
    <Link to={`/playlist-watch/${videoId}`}>
      <Parent variant={variant}>
        <Thumbnail variant={variant}>
          <Img src={thumbnail?.url} alt="Thumbnail" />
        </Thumbnail>
        <VideoDetails>
          <H1 variant={variant}>{title}</H1>
          <P variant={variant}>
            Stack Learner • 24k views • {publishedAt} years ago
          </P>
        </VideoDetails>
        <MenuBar>
          <Button>
            <CiMenuKebab />
          </Button>
        </MenuBar>
      </Parent>
    </Link>
  );
};

export default VideoCard;
