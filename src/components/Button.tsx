import { FC } from "react";
import styled from "@emotion/styled";

type Props = {
  text: string;
  onClick: () => void;
};

export const Button: FC<Props> = (props) => {
  if (props.text === "Login") {
    return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
  }

  return <StyledButton>{props.text}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 5px 15px;
  border-radius: 7px;
  background-color: var(--primary);
  font-size: 16px;
  font-family: "Palanquin Dark", sans-serif;
  color: #ddd;

  &:hover {
    cursor: pointer;
    background-color: #12bebe;
  }
`;
