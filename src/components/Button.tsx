import { FC } from "react";
import styled from "@emotion/styled";

type Props = {
  text: string;
};

export const Button: FC<Props> = (props) => {
  return <StyledButton>{props.text}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 8px 15px;
  border-radius: 7px;
  background-color: var(--main-green);

  &:hover {
    cursor: pointer;
    background-color: #3af30a;
  }
`;
