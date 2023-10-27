import { FC } from "react";
import styled from "@emotion/styled";
import { fetchCurrentlyPlaying } from "../_funcs/user/fetchCurrentlyPlaying.ts";

type Props = {
  // currentlyPlaying: CurrentlyPlaying;
};

const currentlyPlayingReq = await fetchCurrentlyPlaying();

export const CurrentlyPlayingCard: FC<Props> = () => {
  if (!currentlyPlayingReq.success) {
    return (
      <Wrapper>
        <div className="heading">
          <h3>currently playing</h3>
        </div>

        <div className="emptyMessage">
          we couldn't find a song playing. check again, and then try refreshing
          the page.
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="heading">
          <h3>currently playing</h3>
        </div>

        <Body>
          {currentlyPlayingReq.currentlyPlaying.item && (
            <BodyCard>
              <ArtistImageWrapper>
                <img
                  src={
                    currentlyPlayingReq.currentlyPlaying.item.album.images[1]
                      .url
                  }
                  alt="Album Art"
                  width={80}
                  height={80}
                />
              </ArtistImageWrapper>

              <ArtistDataWrapper>
                <p className="title">
                  {currentlyPlayingReq.currentlyPlaying.item.name}
                </p>

                <div className="artist">
                  <p>by</p>
                  {currentlyPlayingReq.currentlyPlaying.item.artists.map(
                    (artist, i) => {
                      if (
                        i + 1 <
                        currentlyPlayingReq.currentlyPlaying.item.artists.length
                      ) {
                        return <p key={artist.id}>{artist.name},</p>;
                      } else {
                        return <p key={artist.id}>{artist.name}</p>;
                      }
                    }
                  )}
                </div>

                <div className="album">
                  <p>on</p>
                  {currentlyPlayingReq.currentlyPlaying.item.album.name}
                </div>
              </ArtistDataWrapper>
            </BodyCard>
          )}
        </Body>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 100%;
  margin: 20px 20px 20px 0;

  .emptyMessage {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 0 0;
    height: 100px;
  }

  .heading {
    margin: 0 0 17px 0;
    border-bottom: 1px solid rgba(230, 230, 230, 70%);

    h3 {
      font-size: 26px;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 300;
      margin: 0 0 3px 5px;
    }
  }
`;

const Body = styled.div`
  display: flex;
  padding: 0 10px;

  .title {
    font-size: 20px;
    font-weight: 600;
  }

  .artist,
  .album {
    display: flex;
    gap: 5px;
    font-size: 18px;
  }
`;

const BodyCard = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: #080808;
  border: 1px solid #888;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #000;
`;

const ArtistImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0 15px 0 0;
  border: 2px solid var(--main-copy);
  border-radius: 3px;
`;

const ArtistDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
