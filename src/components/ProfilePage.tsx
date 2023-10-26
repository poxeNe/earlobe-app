import { Header } from "./Header.tsx";
import { FC } from "react";
import { UserProfile } from "../types/types.ts";
import { UserCard } from "./UserCard.tsx";
import { CurrentlyPlayingCard } from "./CurrentlyPlayingCard.tsx";
import { RecentlyPlayedCard } from "./RecentlyPlayedCard.tsx";
import styled from "@emotion/styled";

type Props = {
  profile: UserProfile;
  // currentlyPlaying?: CurrentlyPlaying;
};

export const ProfilePage: FC<Props> = (props) => {
  return (
    <>
      <Header userId={props.profile.id} />

      <BodyWrapper>
        <UserCard profile={props.profile} />

        <div className="right">
          <CurrentlyPlayingCard />

          <RecentlyPlayedCard />
        </div>
      </BodyWrapper>
    </>
  );
};

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;

  //@media only screen and (max-width: 490px) {
  //  flex-direction: column;
  //}

  //align-items: center;
  //height: calc(100% - 70px);
  //width: 700px;
  //max-width: 600px;
  //overflow: auto;
  //padding: 30px;

  .right {
    width: 100%;
    margin: 0 20px 0 10px;
  }
`;
