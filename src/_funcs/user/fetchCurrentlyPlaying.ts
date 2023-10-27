import { CurrentlyPlaying } from "../../types/types.ts";
import differenceInHours from "date-fns/differenceInHours";
import { clearLocalStorage } from "../clearLocalStorage.ts";

export type CurrentlyPlayingResult =
  | {
      success: true;
      currentlyPlaying: CurrentlyPlaying;
    }
  | {
      success: false;
    };

export const fetchCurrentlyPlaying =
  async (): Promise<CurrentlyPlayingResult> => {
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
      "https://api.spotify.com/v1/me/player/currently-playing",
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

    //--- if response is successfully completed but returns empty json.
    if (result.status === 204) {
      return {
        success: false,
      };
    }

    return {
      success: true,
      currentlyPlaying: (await result.json()) as CurrentlyPlaying,
    };
  };
