import { fetchProfile } from "../_funcs/user/fetchProfile.ts";
import { UserProfile } from "../types/userProfile.ts";
import { Header } from "./Header.tsx";
import styled from "@emotion/styled";

const profile: UserProfile = await fetchProfile();

export const ProfilePage = () => {
  return (
    <>
      <Header userId={profile.id} />

      <Container>
        <h1>Profile page.</h1>

        {profile ? (
          <ProfileData>
            <p>ID: {profile.id}</p>
            <p>Email: {profile.email}</p>
          </ProfileData>
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
