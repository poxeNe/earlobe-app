export const getAccessToken = async (clientId: string, code: string) => {
  const verifier = localStorage.getItem("verifier");

  const body = new URLSearchParams();
  body.append("client_id", clientId);
  body.append("grant_type", "authorization_code");
  body.append("code", code);
  body.append(
    "redirect_uri",
    `${import.meta.env.DEV ? "http://localhost:5173/" : "https://earlo.be/"}`
  );
  body.append("code_verifier", verifier!);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      return response.json();
    })
    .then((data) => {
      const { access_token } = data;
      const accessTokenObj = {
        access_token,
        createdAt: Date.now(),
      };

      localStorage.setItem("accessTokenObj", JSON.stringify(accessTokenObj));
    })
    .catch((error) => {
      console.log("Error: ", error);
    });

  return response;
};
