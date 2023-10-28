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
        <div className="userCard1">
          <UserCard profile={props.profile} />
        </div>

        <div className="right">
          <CurrentlyPlayingCard />

          <RecentlyPlayedCard />

          <div className="userCard2">
            <UserCard profile={props.profile} />
          </div>
        </div>


      </BodyWrapper>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
  //flex-direction: column;
  width: 900px;
  height: 100%;

  @media only screen and (max-width: 900px) {
    position: relative;
    top: 0;
    width: 90vw;
    height: 100%;
  }
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  .userCard2 {
    display: none;
  }

  //align-items: center;
  //height: calc(100% - 70px);
  //width: 700px;
  //max-width: 600px;
  //overflow: auto;
  //padding: 30px;

  .right {
    width: 100%;
    padding: 15px;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .userCard1 {
      display: none;
    }
    
    .right {
      padding-top: 0;
      
      

      .userCard2 {
        display: block;

        > div {
          margin: 17px 0 0 0;
          padding: 0;
        }
      }
    }
  }
`;
