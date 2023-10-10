import { getAccessToken } from "./../_funcs/user/getAccessToken.ts";
// import { fetchProfile } from "./_funcs/user/fetchProfile.ts";
import { redirectToAuthCodeFlow } from "./../_funcs/auth/redirectToAuthCodeFlow.ts";

import "./Root.css";
// import { Header } from "./components/Header.tsx"; // styles

export type UserProfile = {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
};

export type Image = {
  url: string;
  height: number;
  width: number;
};

const clientId = import.meta.env.VITE_CLIENT_ID;
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code && !localStorage.getItem("access_token")) {
  redirectToAuthCodeFlow(clientId);
}

if (!localStorage.getItem("access_token")) {
  getAccessToken(clientId, code!);
}

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

function Root() {
  return (
    <div style={{ display: "block" }}>
      <p>Landing page.</p>
      <a style={{ color: "white" }} href="/profile/">
        Profile page.
      </a>
    </div>
  );
}

export default Root;
