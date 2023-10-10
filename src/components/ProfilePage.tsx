import { FC } from "react";
import { UserProfile } from "../root.tsx";

type Props = {
  profile?: UserProfile;
};

export const ProfilePage: FC<Props> = (props) => {
  return (
    <>
      <h1>Profile page.</h1>

      {props.profile ? (
        <div>{props.profile.id}</div>
      ) : (
        <div>
          <p>No profile found.</p>
        </div>
      )}
    </>
  );
};
