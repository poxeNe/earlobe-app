import { FC } from "react";
import { UserProfile } from "../App.tsx";

type Props = {
  profile: UserProfile;
};

export const Profile: FC<Props> = (props) => {
  return <div>Profile page.</div>;
};
