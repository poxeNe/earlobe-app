import { Header } from "./Header.tsx";
import { FC } from "react";
import { CurrentlyPlaying, UserProfile } from "../types/types.ts";
import { CurrentlyPlayingCard } from "./CurrentlyPlayingCard.tsx";
import { fetchCurrentlyPlaying } from "../_funcs/user/fetchCurrentlyPlaying.ts";
import styled from "@emotion/styled";

type Props = {
  profile: UserProfile;
  currentlyPlaying?: CurrentlyPlaying;
};

const currentlyPlayingReq = await fetchCurrentlyPlaying();

if (!currentlyPlayingReq.success) {
  throw new Error("Can't find any currently playing songs.");
}

const currentlyPlaying = currentlyPlayingReq.currentlyPlaying;

export const ProfilePage: FC<Props> = (props) => {
  return (
    <>
      <Header userId={props.profile.id} />

      <Container>
        <h1>Profile page.</h1>

        {props ? (
          <>
            <ProfileData>
              <p>ID: {props.profile.id}</p>
              <p>Email: {props.profile.email}</p>
            </ProfileData>

            {currentlyPlaying ? (
              <CurrentlyPlayingCard
                currentlyPlaying={currentlyPlayingReq.currentlyPlaying}
              />
            ) : (
              <></>
            )}
          </>
        ) : (
          <div>
            <p>No profile found.</p>
          </div>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 30px;
`;

const ProfileData = styled.div`
  display: block;
`;
