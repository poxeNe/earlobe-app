import { FC } from "react";
import styled from "@emotion/styled";

type Props = {
  text: string;
  img?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  onClick: () => void;
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
  width: 500px;

  button {
    width: 210px;
  }
`;

const ButtonCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4f4f4f;
  border-radius: 7px;
  background-color: var(--primary);
  font-size: 16px;
  font-family: Red Hat Display, sans-serif;
  color: #ddd;

  &:hover {
    cursor: pointer;
    background-color: #1a4d18;
    border-color: #338c10;
  }
`;

const ButtonInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 17px;

  img {
  }

  .text {
  }
`;
