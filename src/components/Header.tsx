import styled from "@emotion/styled";
import { FC } from "react";

type Props = {
  userId: string;
};

export const Header: FC<Props> = (props) => {
  return (
    <HeaderWrapper>
      <Container>
        <Title>Spotifyte</Title>
        {`Logged in as ${props.userId}`}
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 70px;
  padding: 0 100px;
  border-bottom: 1px solid rgba(230, 230, 230, 70%);
`;

const Title = styled.div`
  display: flex;
  color: var(--primary);
  font-family: "Palanquin Dark", sans-serif;
  //letter-spacing: 1px;
  font-size: 40px;
  margin: 0 0 8px;
`;
