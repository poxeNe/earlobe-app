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
            <h2 className="primaryColor">ear</h2>
            <h2 className="accentColor">lo</h2>
            <h2 className="primaryColor">.</h2>
            <h2 className="accentColor">be</h2>
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
    letter-spacing: 1px;

    img {
      position: relative;
      top: 2px;
    }

    p {
      font-weight: 200;
      margin: 0 0 0 7px;
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
    position: relative;
    top: 1px;
    font-size: 18px;
  }

  .primaryColor {
    color: var(--primary);
  }

  .accentColor {
    color: var(--accent);
  }
`;
