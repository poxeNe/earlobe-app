import { Button } from "../components/Button.tsx";
import { handleLogin } from "../_funcs/auth/handleLogin.ts";
import { getAccessToken } from "../_funcs/user/getAccessToken.ts";
import { ProfilePage } from "../components/ProfilePage.tsx";
import { fetchProfile, ProfileResult } from "../_funcs/user/fetchProfile.ts";
import styled from "@emotion/styled";
import "./Root.css";

const clientId = import.meta.env.VITE_CLIENT_ID;
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
  await getAccessToken(clientId, code);
}

const profileReq: ProfileResult = await fetchProfile();

function Root() {
  const handleClick = async () => {
    await handleLogin();
  };

  const renderLanding = () => {
    return (
      <Container>
        <TitleWrapper>
          <div className="heading">
            <h1 className="primaryColor">ear</h1>
            <h1 className="accentColor">lo</h1>
            <h1 className="primaryColor">.</h1>
            <h1 className="accentColor">be</h1>
          </div>

          <div className="sub">
            <p>level up your taste in music.</p>
          </div>
        </TitleWrapper>

        <Button
          text="login with spotify"
          img={{
            src: "/spotify.svg",
            alt: "Spotify Logo",
            width: 25,
            height: 25,
          }}
          onClick={() => handleClick()}
        />
      </Container>
    );
  };

  return (
    <>
      {!profileReq.success ? (
        renderLanding()
      ) : (
        <ProfilePage profile={profileReq.profile} />
      )}
    </>
  );
}

export default Root;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  button {
    margin: 25px 0 0;
    width: 125px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Red Hat Display, sans-serif;

  .heading,
  .sub {
    display: flex;
  }

  .primaryColor {
    color: var(--primary);
  }

  .accentColor {
    color: var(--accent);
  }

  h1 {
    font-size: 69px;
    font-weight: 700;
    letter-spacing: 2px;
    //color: var(--primary);
    color: white;
    //text-shadow: 0px 0px 5px #666;
  }

  p {
    font-size: 21px;
    letter-spacing: 2px;
    //font-family: Red Hat Display, sans-serif;
  }
`;
