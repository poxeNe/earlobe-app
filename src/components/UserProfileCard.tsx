import { FC } from "react";
import { UserProfile } from "../types/types.ts";
import styled from "@emotion/styled";

type Props = {
  profile: UserProfile;
};

export const UserProfileCard: FC<Props> = (props) => {
  return (
    <UserInformationWrapper>
      <div className="heading">
        <h3>User information:</h3>
      </div>

      <Card>
        {props.profile ? (
          <>
            <ProfileDataWrapper>
              <p>ID: {props.profile.id}</p>
              <p>Email: {props.profile.email}</p>
            </ProfileDataWrapper>
          </>
        ) : (
          <div>
            <p>No profile found.</p>
          </div>
        )}
      </Card>
    </UserInformationWrapper>
  );
};

const UserInformationWrapper = styled.div`
  width: 300px;
  margin: 20px;

  .heading {
    margin: 0 0 17px 0;
    border-bottom: 1px solid rgba(230, 230, 230, 70%);

    h3 {
      font-size: 26px;
      font-family: Red Hat Display, sans-serif;
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
