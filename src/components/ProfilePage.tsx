import { Header } from "./Header.tsx";
import { FC } from "react";
import { UserProfile } from "../types/types.ts";
import { CurrentlyPlayingCard } from "./CurrentlyPlayingCard.tsx";
import { UserProfileCard } from "./UserProfileCard.tsx";
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
        {props.profile ? (
          <UserProfileCard profile={props.profile} />
        ) : (
          <div>No profile information found.</div>
        )}

        <CurrentlyPlayingCard />
      </BodyWrapper>
    </>
  );
};

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  //align-items: center;
  //height: calc(100% - 70px);
  //width: 700px;
  //max-width: 600px;
  //overflow: auto;
  //padding: 30px;
`;
