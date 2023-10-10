import "./Root.css";
import styled from "@emotion/styled";
import { Button } from "../components/Button.tsx";
import { handleLogin } from "../_funcs/auth/handleLogin.ts";
import { getAccessToken } from "../_funcs/user/getAccessToken.ts";
import { useNavigate } from "react-router-dom";
const clientId = import.meta.env.VITE_CLIENT_ID;
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

// const profile: UserProfile = await fetchProfile();
//
// const renderProfile = (profile: UserProfile) => {
//   if (!profile) {
//     return (
//       <>
//         <div>Test</div>
//       </>
//     );
//   }
//
//   return (
//     <>
//       <Header userId={profile.id} />
//
//       <h1>Display your Spotify profile data</h1>
//
//       <section id="profile">
//         <h2>
//           Logged in as <span id="displayName">{profile.display_name}</span>
//         </h2>
//         <span id="avatar"></span>
//         <ul>
//           <li>
//             User ID: <span id="id"> {profile.id} </span>
//           </li>
//           <li>
//             Email: <span id="email">{profile.email}</span>
//           </li>
//           <li>
//             Spotify URI:{" "}
//             <a id="uri" href="#">
//               {profile.uri}
//             </a>
//           </li>
//           <li>
//             Link:{" "}
//             <a id="url" href="#">
//               {profile.href}
//             </a>
//           </li>
//           <li>
//             Profile Image: <span id="imgUrl"></span>
//           </li>
//         </ul>
//       </section>
//     </>
//   );
// };

if (code) {
  await getAccessToken(clientId, code!);
}

function Root() {
  const navigate = useNavigate();

  const handleClick = () => {
    if (localStorage.getItem("access_token")) {
      navigate("/profile");
    }

    handleLogin();
  };

  if (localStorage.getItem("access_token")) {
    navigate("/profile");
  }

  return (
    <Container>
      <TitleWrapper>
        <h1>Spotifyte</h1>
        <p>Level up your taste in music.</p>
      </TitleWrapper>

      <Button text={"Login"} onClick={() => handleClick()} />
    </Container>
  );
}

export default Root;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  button {
    margin: 25px 0 0;
    width: 125px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 69px;
    color: var(--primary);
    //text-shadow: 0px 0px 5px #666;
  }

  p {
    font-size: 21px;
    font-family: "Palanquin Dark", sans-serif;
  }
`;
