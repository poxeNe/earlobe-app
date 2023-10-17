import { FC } from "react";
import styled from "@emotion/styled";
import { fetchCurrentlyPlaying } from "../_funcs/user/fetchCurrentlyPlaying.ts";

type Props = {
  // currentlyPlaying: CurrentlyPlaying;
};

const currentlyPlayingReq = await fetchCurrentlyPlaying();

export const CurrentlyPlayingCard: FC<Props> = () => {
  if (!currentlyPlayingReq.success) {
    return <div>No song currently playing.</div>;
  } else {
    return (
      <CurrentlyPlayingWrapper>
        <div className="heading">
          <h3>Currently playing:</h3>
        </div>

        <Card>
          {currentlyPlayingReq.currentlyPlaying.item ? (
            <>
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
            </>
          ) : (
            <div>a song is not playing.</div>
          )}
        </Card>
      </CurrentlyPlayingWrapper>
    );
  }
};

const CurrentlyPlayingWrapper = styled.div`
  width: 600px;
  margin: 20px 20px 20px 0;

  .heading {
    margin: 0 0 17px 0;
    border-bottom: 1px solid rgba(230, 230, 230, 70%);

    h3 {
      font-size: 26px;
      font-family: Red Hat Display, sans-serif;
      font-weight: 300;
      margin: 0 0 5px 0;
    }
  }
`;

const Card = styled.div`
  display: flex;
  padding: 10px;
  background-color: #000;
  border: 1px solid #ddd;
  border-radius: 5px;

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

const ArtistImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 15px 0 0;
  border: 1px solid white;
  border-radius: 3px;
`;

const ArtistDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
