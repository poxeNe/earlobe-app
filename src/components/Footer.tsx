import styled from "@emotion/styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <BodyWrapper>
        <Body>
          <div className="text">
            <p className="created">
              created with love by{" "}
              <a
                className="poxene"
                href="https://buymeacoffee.com/poxeNe"
                target="_blank"
              >
                poxeNe
              </a>
              .
            </p>

            <p className="powered">powered by spotify.</p>
          </div>
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

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 60px;
    padding: 0;
  }
`;

const Body = styled.div`
  color: var(--main-copy);
  font-family: "Red Hat Display", sans-serif;
  font-size: 14px;
  letter-spacing: 3px;
  //font-size: 40px;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;

    .powered {
      margin: 0 0 0 3px;
    }
  }

  p {
    position: relative;
    top: 0px;

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

  @media only screen and (max-width: 900px) {
    height: 40px;

    .text {
      flex-direction: column;
      //margin: 5px 0;
    }

    p {
      top: 0;
    }
  }
`;
