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
        <h3>user</h3>
      </div>

      <Body>
        {props.profile ? (
          <BodyCard>
            <ProfileDataWrapper>
              <p>username:</p>
              <p>spotify id: {props.profile.id}</p>
              <p>email: {props.profile.email}</p>
              <p>lorem: ipsum</p>
              <p>lorem: ipsum</p>
              <p>lorem: ipsum</p>
              <p>lorem: ipsum</p>
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
  width: 300px;
  margin: 20px;

  .heading {
    margin: 0 0 17px 0;
    border-bottom: 1px solid rgba(230, 230, 230, 70%);

    h3 {
      font-size: 26px;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 300;
      margin: 0 0 3px 5px;
    }
  }
`;

const Body = styled.div`
  display: flex;
  padding: 0 10px;
`;

const BodyCard = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: #080808;
  border: 1px solid #888;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #000;
`;

const ProfileDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
