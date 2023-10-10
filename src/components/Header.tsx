import styled from "@emotion/styled";
import { FC } from "react";

type Props = {
  userId: string;
};

export const Header: FC<Props> = (props) => {
  return (
    <Container>
      <Title>Spotifyte</Title>
      {`Logged in as ${props.userId}`}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 50px;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.div`
  display: flex;
  color: var(--primary);
  font-family: "Palanquin Dark", sans-serif;
  //letter-spacing: 1px;
  font-size: 40px;
  margin: 0 0 8px;
`;
