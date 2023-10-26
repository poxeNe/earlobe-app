import styled from "@emotion/styled";
import { FC } from "react";

type Props = {
  userId: string;
};

export const Header: FC<Props> = (props) => {
  return (
    <HeaderWrapper>
      <BodyWrapper>
        <TitleWrapper>
          <div className="heading">
            <h1 className="primaryColor">ear</h1>
            <h1 className="accentColor">lo</h1>
            <h1 className="primaryColor">.</h1>
            <h1 className="accentColor">be</h1>
          </div>
        </TitleWrapper>

        <div className="loggedIn">
          <img
            className="spotifyLogo"
            src="/spotify.svg"
            alt="spotify logo"
            width={20}
            height={20}
          />

          <p>{props.userId}</p>
        </div>
      </BodyWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 50px;
  padding: 0 100px;
  border-bottom: 1px solid var(--main-copy);

  .loggedIn {
    display: flex;

    img {
      position: relative;
      top: 3px;
    }

    p {
      font-weight: 200;
      margin: 0 0 0 5px;
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  top: 2px;
  color: var(--accent);
  font-family: "Red Hat Display", sans-serif;
  letter-spacing: 5px;
  //font-size: 40px;
  margin: 0 0 8px;

  .heading {
    display: flex;
  }

  .primaryColor {
    color: var(--primary);
  }

  .accentColor {
    color: var(--accent);
  }
`;
