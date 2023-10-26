import { RecentlyPlayed } from "../../types/types.ts";
import differenceInHours from "date-fns/differenceInHours";
import { clearLocalStorage } from "../clearLocalStorage.ts";

export type RecentlyPlayedResult =
  | {
      success: true;
      recentlyPlayed: RecentlyPlayed;
    }
  | {
      success: false;
    };

export const fetchRecentlyPlayed = async (
  limit?: number
): Promise<RecentlyPlayedResult> => {
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

  const result = await fetch(
    `https://api.spotify.com/v1/me/player/recently-played?limit=${
      limit ? limit : 20
    }`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessTokenObj.access_token}`,
      },
    }
  );

  if (!result.ok) {
    clearLocalStorage();

    return {
      success: false,
    };
  }

  return {
    success: true,
    recentlyPlayed: (await result.json()) as RecentlyPlayed,
  };
};
