import { Types } from "../../types/types.ts";
import differenceInHours from "date-fns/differenceInHours";

export type ProfileResult =
  | {
      success: true;
      profile: Types;
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
    localStorage.removeItem("accessTokenObj");

    return {
      success: false,
    };
  }

  return {
    success: true,
    profile: (await result.json()) as Types,
  };
};
