import { redirectToAuthCodeFlow } from "./redirectToAuthCodeFlow.ts";

export const handleLogin = async () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;

  if (!localStorage.getItem("access_token")) {
    await redirectToAuthCodeFlow(clientId);
  }

  if (localStorage.getItem("access_token")) {
    return true;
  }
};
