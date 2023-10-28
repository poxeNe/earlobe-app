import { FC } from "react";
import { UserProfile } from "../types/types.ts";
import { Header } from "./Header.tsx";
import { UserCard } from "./UserCard.tsx";
import { CurrentlyPlayingCard } from "./CurrentlyPlayingCard.tsx";
import { RecentlyPlayedCard } from "./RecentlyPlayedCard.tsx";
import { Footer } from "./Footer.tsx";
import styled from "@emotion/styled";

type Props = {
  profile: UserProfile;
  // currentlyPlaying?: CurrentlyPlaying;
};

export const ProfilePage: FC<Props> = (props) => {
  return (
    <Wrapper>
      <Header userId={props.profile.id} />

      <BodyWrapper className="bodyWrapper">
        <UserCard profile={props.profile} />

        <div className="right">
          <CurrentlyPlayingCard />

          <RecentlyPlayedCard />
        </div>
      </BodyWrapper>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 900px;

  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

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

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .right {
      margin: 0;
    }
  }
`;
