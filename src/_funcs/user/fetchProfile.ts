import { UserProfile } from "../../types/types.ts";
import differenceInHours from "date-fns/differenceInHours";
import { clearLocalStorage } from "../clearLocalStorage.ts";

export type ProfileResult =
  | {
      success: true;
      profile: UserProfile;
    }
  | {
      success: false;
    };

export const fetchProfile = async (): Promise<ProfileResult> => {
  if (!localStorage.getItem("accessTokenObj")) {
    return {
      success: false,
    };
  }

  const accessTokenObj = JSON.parse(localStorage.getItem("accessTokenObj")!);

  if (differenceInHours(accessTokenObj.createdAt, Date.now()) >= 1) {
    localStorage.removeItem("accessTokenObj");

    return {
      success: false,
    };
  }

  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessTokenObj.access_token}`,
    },
  });

  if (!result.ok) {
    clearLocalStorage();

    return {
      success: false,
    };
  }

  //--- if response is successfully completed but returns empty json.
  if (result.status === 204) {
    return {
      success: false,
    };
  }

  const profile = (await result.json()) as UserProfile;

  return {
    success: true,
    profile,
  };
};
