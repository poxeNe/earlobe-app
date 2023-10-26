import { FC } from "react";
import styled from "@emotion/styled";
import {
  fetchRecentlyPlayed,
  RecentlyPlayedResult,
} from "../_funcs/user/fetchRecentlyPlayed.ts";
import { PlayHistory } from "../types/types.ts";

type Props = {
  // currentlyPlaying: CurrentlyPlaying;
};

const recentlyPlayedReq: RecentlyPlayedResult = await fetchRecentlyPlayed(10);

export const RecentlyPlayedCard: FC<Props> = () => {
  if (!recentlyPlayedReq.success) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0 0 0",
        }}
      >
        no recently played songs found.
      </div>
    );
  } else {
    return (
      <Wrapper>
        <div className="heading">
          <h3>recently played</h3>
        </div>

        <BodyWrapper>
          {recentlyPlayedReq.recentlyPlayed.items.length > 0 ? (
            <Body>
              {recentlyPlayedReq.recentlyPlayed.items.map(
                (item: PlayHistory, i) => {
                  return (
                    <BodyCard className={`bodyCard${i}`}>
                      <div className="title">
                        <p>{item.track.name}</p>
                      </div>

                      <div className="artist">
                        <p className="by">by</p>

                        {item.track.artists.map((artist, i) => {
                          if (i + 1 < item.track.artists.length) {
                            return <p key={artist.id}>{artist.name},</p>;
                          } else {
                            return <p key={artist.id}>{artist.name}</p>;
                          }
                        })}
                      </div>

                      <div className="album">
                        <p className="on">on</p>
                        <p>{item.track.album.name}</p>
                      </div>
                    </BodyCard>
                  );
                }
              )}
            </Body>
          ) : (
            <div>no recently played songs found.</div>
          )}
        </BodyWrapper>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 100%;
  margin: 20px 20px 20px 0;

  .heading {
    margin: 0 0 17px 0;
    border-bottom: 1px solid rgba(230, 230, 230, 70%);

    h3 {
      font-size: 26px;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 300;
      margin: 0 0 5px 0;
    }
  }
`;

const BodyWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  border-radius: 5px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 100%;

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
