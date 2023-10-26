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

      <Card>
        {props.profile ? (
          <>
            <ProfileDataWrapper>
              <p>username:</p>
              <p>spotify id: {props.profile.id}</p>
              <p>email: {props.profile.email}</p>
              <p>lorem: ipsum</p>
              <p>lorem: ipsum</p>
              <p>lorem: ipsum</p>
              <p>lorem: ipsum</p>
            </ProfileDataWrapper>
          </>
        ) : (
          <div>
            <p>no profile found.</p>
          </div>
        )}
      </Card>
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
      margin: 0 0 5px 0;
    }
  }
`;

const Card = styled.div`
  display: flex;
  padding: 10px;
  background-color: #000;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ProfileDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
