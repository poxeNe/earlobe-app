import { FC } from "react";
import { UserProfile } from "../types/types.ts";
import styled from "@emotion/styled";

type Props = {
  profile: UserProfile;
};

export const UserCard: FC<Props> = (props) => {
  return (
    <Wrapper>
      <div className="heading">
        <h2>user</h2>
      </div>

      <Body>
        {props.profile ? (
          <BodyCard>
            <ProfileDataWrapper>
              <Header>name</Header>
              <p style={{ margin: "5px 0 10px 0" }}>{props.profile.id}</p>

              <Header>stats</Header>
              {/*<p>email: {props.profile.email}</p>*/}
              <p style={{ margin: "5px 0 10px 0" }}>songs listened to:</p>
            </ProfileDataWrapper>
          </BodyCard>
        ) : (
          <div>
            <p>no profile found.</p>
          </div>
        )}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 225px;
  padding: 15px;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }

  .heading {
    margin: 0 0 17px 0;
    border-bottom: 1px solid var(--rule-grey);

    h2 {
      font-size: 26px;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 100;
      margin: 0 0 3px 5px;
    }
  }
`;

const Body = styled.div`
  display: flex;
  padding: 0 13px;
  //padding: 0 10px;
`;

const BodyCard = styled.div`
  display: flex;
  width: 100%;
  //padding: 10px;
  //background-color: #080808;
  //border: 1px solid #888;
  border-radius: 5px;
  //box-shadow: 2px 2px 5px #000;
`;

const ProfileDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  p {
    padding: 0 0 0 10px;
  }
`;

const Header = styled.h3`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;
  padding: 0 0 0 5px;
  //margin: 0 auto;
  color: var(--main-copy);
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 4px;
  border-bottom: 1px solid var(--rule-grey);
`;
