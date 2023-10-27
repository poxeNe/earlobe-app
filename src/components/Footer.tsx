import styled from "@emotion/styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <BodyWrapper>
        <Body>
          <p>
            created with love by{" "}
            <a
              className="poxene"
              href="https://buymeacoffee.com/poxeNe"
              target="_blank"
            >
              poxeNe
            </a>
            . powered by spotify.
          </p>
        </Body>
      </BodyWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 50px;
  padding: 0 100px;
  border-top: 1px solid var(--main-copy);
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-copy);
  font-family: "Red Hat Display", sans-serif;
  font-size: 14px;
  letter-spacing: 3px;
  //font-size: 40px;

  p {
    position: relative;
    top: -5px;

    .poxene {
      text-decoration: none;
      color: var(--main-copy);

      &:visited {
        color: #e08514;
      }

      &:hover {
        color: var(--accent-light);
      }
    }
  }
`;
