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

export const ProfilePage: FC<Props> = (props) => {
  return (
    <>
      <Header userId={props.profile.id} />

      <Container>
        <h3>Profile:</h3>

        {props.profile ? (
          <>
            <ProfileDataWrapper>
              <p>ID: {props.profile.id}</p>
              <p>Email: {props.profile.email}</p>
            </ProfileDataWrapper>

            {currentlyPlayingReq.success ? (
              <CurrentlyPlayingCard
                currentlyPlaying={currentlyPlayingReq.currentlyPlaying}
              />
            ) : (
              <div>No song is currently playing.</div>
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
  height: calc(100% - 70px);
  overflow: auto;
  padding: 30px;
`;

const ProfileDataWrapper = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #000;
  border-radius: 5px;
`;
