import { generateCodeVerifier } from "./generateCodeVerifier.ts";
import { generateCodeChallenge } from "./generateCodeChallenge.ts";

export const redirectToAuthCodeFlow = async (clientId: string) => {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "https://earlo.be/");
  params.append(
    "scope",
    "user-read-private user-read-email user-read-currently-playing user-read-recently-played"
  );
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
};
