import { Header } from "./Header.tsx";
import { FC } from "react";
import { UserProfile } from "../types/userProfile.ts";
import styled from "@emotion/styled";

type Props = {
  profile: UserProfile;
};

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

            {/*<div>{props}</div>*/}
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
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 30px;
`;

const ProfileData = styled.div`
  display: block;
`;
