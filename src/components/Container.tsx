import { FC, ReactNode } from "react";
import styled from "@emotion/styled";

type Props = {
  children?: ReactNode;
};

export const Container: FC<Props> = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

const StyledDiv = styled.div`
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //flex-direction: column;
  height: calc(100% - 50px);
  overflow: auto;
  padding: 30px;
`;
