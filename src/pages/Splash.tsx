import styled from "@emotion/styled";

import logo from "../assets/svg/Logo.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(162deg, #9663ff 41.49%, #00e19b 99.48%);
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .banzzac_logo {
    margin-top: 20px;
  }
`;

function Splash() {
  return (
    <Container>
      <LogoWrapper>
        <img src="/img/icon.png" alt="icon" width={130} height={130} />
        <img
          src={logo}
          className="banzzac_logo"
          alt="banzzac_logo"
          width={215}
        />
      </LogoWrapper>
    </Container>
  );
}

export default Splash;
