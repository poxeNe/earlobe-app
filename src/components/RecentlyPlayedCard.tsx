import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  fetchRecentlyPlayed,
  RecentlyPlayedResult,
} from "../_funcs/user/fetchRecentlyPlayed.ts";
import { Artist, PlayHistory, RecentlyPlayed } from "../types/types.ts";
import { Loading } from "./Loading.tsx";
import { shortenString } from "../_funcs/util/shortenString.ts";

type Props = {
  // currentlyPlaying: CurrentlyPlaying;
};

const NUM_RECENTLY_PLAYED = 10;

export const RecentlyPlayedCard: FC<Props> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recentlyPlayed, setRecentlyPlayed] = useState<RecentlyPlayed>();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      const recentlyPlayedReq: RecentlyPlayedResult = await fetchRecentlyPlayed(
        NUM_RECENTLY_PLAYED
      );

      if (!recentlyPlayedReq.success) {
        setIsLoading(false);
        return;
      }

      setRecentlyPlayed(recentlyPlayedReq.recentlyPlayed);
      setIsLoading(false);
    };

    fetch();
  }, [setRecentlyPlayed]);

  const renderArtists = (artists: Artist[]) => {
    if (artists.length > 0) {
      if (artists.length >= 2) {
        return `${artists[0].name} and ${artists.length - 1} ${
          artists.length - 1 === 1 ? "other" : "others"
        }`;
      }

      return `${artists[0].name}`;
    }

    return "no artists found.";
  };

  if (recentlyPlayed?.items.length === 0) {
    return (
      <Wrapper>
        <div className="heading">
          <h3>recently played</h3>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="emptyMessage">
            we couldn't find any recently played songs.
          </div>
        )}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="heading">
          <h3>recently played</h3>
        </div>

        {/*<BodyWrapper>*/}
        <Body>
          {recentlyPlayed?.items.map((item: PlayHistory, i) => {
            return (
              <BodyCard className={`bodyCard${i}`}>
                <div className="title">
                  <p>{shortenString(item.track.name, 30)}</p>
                </div>

                <div className="artist">
                  <p className="by">by</p>

                  <p>{renderArtists(item.track.artists)}</p>
                </div>

                <div className="album">
                  <p className="on">on</p>
                  <p>{shortenString(item.track.album.name, 25)}</p>
                </div>
              </BodyCard>
            );
          })}
        </Body>
        {/*</BodyWrapper>*/}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0;

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
    margin: 0;
  }
`;

// const BodyWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   padding: 0 10px;
//   border-radius: 5px;
//
//   @media only screen and (max-width: 900px) {
//     padding: 0;
//   }
// `;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: auto;
  padding: 0 13px;

  > div:nth-child(odd) {
    background-color: #080808;
    border: 1px solid #888;
  }

  > div:nth-child(even) {
    background-color: #012118;
    border: 1px solid #0f8c5f;
  }

  .bodyCard1 {
    opacity: 100%;
  }

  .bodyCard2 {
    opacity: 90%;
  }

  .bodyCard3 {
    opacity: 80%;
  }

  .bodyCard4 {
    opacity: 70%;
  }

  .bodyCard5 {
    opacity: 60%;
  }

  .bodyCard6 {
    opacity: 50%;
  }

  .bodyCard7 {
    opacity: 40%;
  }

  .bodyCard8 {
    opacity: 30%;
  }

  .bodyCard9 {
    opacity: 20%;
  }

  .bodyCard10 {
    opacity: 10%;
  }
`;

const BodyCard = styled.div`
  display: flex;
  width: auto;
  border-radius: 5px;
  padding: 8px 12px;
  box-shadow: 1px 1px 3px #000;

  .title {
    //font-size: 20px;
    font-weight: 600;
  }

  .artist,
  .album {
    display: flex;
    //font-size: 18px;

    p {
      margin: 0 0 0 5px;
      //color: var(--main-copy);
    }

    .by,
    .on {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 1px;
      margin: 0 3px 0 8px;
      font-size: 13px;
      font-weight: 700;
      color: var(--accent-light);
      //transform: rotate(5deg);
    }
  }
`;
