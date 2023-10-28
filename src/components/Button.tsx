import { FC } from "react";
import styled from "@emotion/styled";

type Props = {
  text: string;
  onClick: () => void;
  img?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const Button: FC<Props> = (props) => {
  if (props.img) {
    return (
      <ButtonWrapper>
        <ButtonCard onClick={props.onClick}>
          <ButtonInner>
            <img
              src={props.img.src}
              alt={props.img.alt}
              width={props.img.width}
              height={props.img.height}
            />
            <div className="text">{props.text}</div>
          </ButtonInner>
        </ButtonCard>
      </ButtonWrapper>
    );
  }

  return <ButtonCard onClick={props.onClick}>{props.text}</ButtonCard>;
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 195px;
  }
`;

const ButtonCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--secondary);
  border-radius: 7px;
  background-color: var(--secondary-light);
  font-size: 16px;
  font-family: "Red Hat Display", sans-serif;
  color: #ddd;

  &:hover {
    cursor: pointer;
    background-color: var(--accent-dark);
    border-color: var(--accent-light);
  }
`;

const ButtonInner = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px 0;

  img {
    position: relative;
    //top: 2px;
  }

  .text {
    position: relative;
    top: 2px;
  }
`;
