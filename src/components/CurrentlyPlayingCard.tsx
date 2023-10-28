import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { fetchCurrentlyPlaying } from "../_funcs/user/fetchCurrentlyPlaying.ts";
import { Artist, CurrentlyPlaying } from "../types/types.ts";
import { Loading } from "./Loading.tsx";
import { shortenString } from "../_funcs/util/shortenString.ts";

type Props = {
  // currentlyPlaying: CurrentlyPlaying;
};

export const CurrentlyPlayingCard: FC<Props> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<CurrentlyPlaying>();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      const currentlyPlayingReq = await fetchCurrentlyPlaying();

      if (!currentlyPlayingReq.success) {
        setIsLoading(false);
        return;
      }

      // if (currentlyPlayingReq.)

      setCurrentlyPlaying(currentlyPlayingReq.currentlyPlaying);
      setIsLoading(false);
    };

    fetch();
  }, [setCurrentlyPlaying]);

  const renderArtists = (artists: Artist[]) => {
    if (artists.length > 0) {
      if (artists.length >= 2) {
        return `${artists[0].name}, ${artists[1].name}, ${
          artists[2].name
        } and ${artists.length - 3} ${
          artists.length - 1 === 1 ? "other" : "others"
        }`;
      }

      return `${artists[0].name}`;
    }

    return "no artists found.";
  };

  if (!currentlyPlaying?.item.id) {
    return (
      <Wrapper>
        <div className="heading">
          <h3>currently playing</h3>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="emptyMessage">
            we couldn't find a song playing. check again, and then try
            refreshing the page.
          </div>
        )}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="heading">
          <h3>currently playing</h3>
        </div>

        <Body>
          {currentlyPlaying.item.name && (
            <BodyCard>
              <ArtistImageWrapper>
                <img
                  src={currentlyPlaying.item.album.images[1].url}
                  alt="Album Art"
                  width={80}
                  height={80}
                />
              </ArtistImageWrapper>

              <ArtistDataWrapper>
                <p className="title">
                  {shortenString(currentlyPlaying.item.name, 60)}
                </p>

                <div className="artist">
                  <p>by</p>
                  {renderArtists(currentlyPlaying.item.artists)}
                </div>

                <div className="album">
                  <p>on</p>
                  {currentlyPlaying.item.album.name}
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
  //margin: 20px 0;

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

  @media only screen and (max-width: 900px) {
    margin: 17px 0;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  padding: 0 13px;

  .title {
    font-size: 21px;
    font-weight: 600;
  }

  .artist,
  .album {
    display: flex;
    gap: 5px;
    font-size: 18px;
  }

  @media only screen and (max-width: 900px) {
    padding: 0;
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

  @media only screen and (max-width: 900px) {
    //padding: 0;
  }
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
