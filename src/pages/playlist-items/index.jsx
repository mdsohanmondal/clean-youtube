import styled from 'styled-components';
import VideoCard from '../../components/cards/video-card';
import H1 from '../../components/sheard/H1';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 56px;
  padding: 1rem 2rem;
  gap: 1rem;
`;
const LeftSection = styled.div`
  width: 30vw;
  min-height: 100vh;
  border: '1px solid #000';
  background-color: #eee;
  padding: 0.9rem 1rem;
  position: fixed;
  top: 58px;
`;

const PlaylistDetails = styled.div`
  width: 100%;
  margin: 0.4rem 0.6rem;
`;

const ImagePart = styled.div`
  width: 28vw;
  height: 28vh;
  box-shadow: 0 0 5px #9b9b9b;
  border-radius: 12px;
  margin-right: 4rem;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
`;
const PlaylistDetailsTexts = styled.div``;

const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 0.5rem;
`;

const DescriptionContainer = styled.div`
  width: 25vw;
  margin-top: 1rem;
`;
const P = styled.p`
  font-size: 15px;
  color: '#a0a0a0';
`;

const RightSection = styled.div`
  width: 100%;
  min-height: 100vh;
  border: '1px solid #000';
`;

const VideoInformationDivision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const PlaylistItems = () => {
  const playlist = useStoreState((state) => state.playlist.data);
  const { playlistId: paramUrl } = useParams();
  const {
    channelTitle,
    items,
    playlistDescription,
    playlistId,
    playlistThumbnails,
    playlistTitle,
  } = playlist[paramUrl];
  const setPresentPlayingItem = useStoreActions(
    (state) => state.presentPlaying.setItems
  );
  useEffect(() => {
    setPresentPlayingItem(items);
  }, []);

  return (
    <Wrapper id={playlistId}>
      <LeftSection>
        <PlaylistDetails>
          <ImagePart>
            <Img src={playlistThumbnails.url} alt="Thumbnail" />
          </ImagePart>
          <PlaylistDetailsTexts>
            <H1>{playlistTitle}</H1>
            <ChannelContainer>
              <div className="w-6 h-6 rounded-full bg-zinc-900 inline-block"></div>
              <h3>by {channelTitle}</h3>
            </ChannelContainer>
            <br />
            <h2>playlist . {items.length} videos</h2>
            <DescriptionContainer>
              <P>
                {playlistDescription.slice(0, 150)}
                {'.'}
                See More...
              </P>
            </DescriptionContainer>
          </PlaylistDetailsTexts>
        </PlaylistDetails>
      </LeftSection>
      <RightSection>
        <VideoInformationDivision>
          <div>
            {items?.map((item) => (
              <VideoCard
                key={item.videoId}
                videoId={item.videoId}
                description={item.description}
                position={item.position}
                title={item.title}
                thumbnail={item.medium}
                publishedAt={item.publishedAt}
              />
            ))}
          </div>
        </VideoInformationDivision>
      </RightSection>
    </Wrapper>
  );
};
export default PlaylistItems;
