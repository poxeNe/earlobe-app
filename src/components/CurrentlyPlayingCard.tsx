import { FC, ReactNode } from "react";
import { CurrentlyPlaying } from "../types/types.ts";
import styled from "@emotion/styled";

type Props = {
  currentlyPlaying: CurrentlyPlaying;
  children?: ReactNode;
};

export const CurrentlyPlayingCard: FC<Props> = (props) => {
  return (
    <>
      <h3>Currently playing:</h3>
      <CurrentlyPlayingWrapper>
        {props.currentlyPlaying.item ? (
          <ArtistDataWrapper>
            <p className="title">{props.currentlyPlaying.item.name}</p>

            <div className="artist">
              <p>By</p>
              {props.currentlyPlaying.item.artists.map((artist, i) => {
                if (i + 1 < props.currentlyPlaying.item.artists.length) {
                  return <p key={artist.id}>{artist.name},</p>;
                } else {
                  return <p key={artist.id}>{artist.name}</p>;
                }
              })}
            </div>

            <p className="album">{props.currentlyPlaying.item.album.name}</p>
          </ArtistDataWrapper>
        ) : (
          <div>a song is not playing.</div>
        )}
      </CurrentlyPlayingWrapper>
    </>
  );
};

const CurrentlyPlayingWrapper = styled.div`
  display: flex;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #000;
  border-radius: 5px;

  .title {
    font-size: 20px;
    font-weight: 600;
  }

  .artist {
    display: flex;
    gap: 5px;
    font-size: 18px;
  }
`;

const ArtistDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
