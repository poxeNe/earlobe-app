import { UserProfile } from "../../types/userProfile.ts";

export const fetchProfile = async (): Promise<UserProfile> => {
  const accessToken = localStorage.getItem("access_token");

  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return await result.json();
};
