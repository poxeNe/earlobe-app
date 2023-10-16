import { FC, ReactNode } from "react";
import { CurrentlyPlaying } from "../types/types.ts";
import { Container } from "./Container.tsx";

type Props = {
  currentlyPlaying: CurrentlyPlaying;
  children?: ReactNode;
};

export const CurrentlyPlayingCard: FC<Props> = (props) => {
  return (
    <Container>
      {props.currentlyPlaying.item ? (
        <div>Currently Playing: {props.currentlyPlaying.item.name}</div>
      ) : (
        <div>a song is not playing.</div>
      )}
    </Container>
  );
};
