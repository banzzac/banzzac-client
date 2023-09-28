import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";

// Import Icons`
import chatIcon from "./../img/Icons/Chat-Icon.png";
import feedIcon from "./../img/Icons/Feed-Icon.png";
import firendIcon from "./../img/Icons/Friend-Icon.png";
import profileIcon from "./../img/Icons/Profile-Icon.png";
import searchIcon from "./../img/Icons/Search-Icon.png";

// Styled Zone
const Nav = styled.nav`
  width: 360px;
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-item: center;
  bottom: 15px;
  left: 7%;

  padding: 13px 48px;
  box-sizing: border-box;
  border-radius: 67px;
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
`;
const FooterImg = styled.img``;
const SearchDiv = styled.div`
  position: relative;
`;
const SearchImg = styled.img`
  position: absolute;
  left: -18px;
  top: -35px;
  width: 50px;
  height: 50px;
  font-size: 15px;
  background-color: #a463ff;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
  border-radius: 25px;
  object-fit: cover;
`;

export const Navigator = () => {
  return (
    <div>
      <Outlet />
      <Nav>
        <Link to={"profile"}>
          <FooterImg src={profileIcon} alt="Profile" />
        </Link>
        <Link to={"chat"}>
          <FooterImg src={chatIcon} alt="Chat" />
        </Link>
        <Link to={"search"}>
          <SearchDiv>
            <SearchImg src={searchIcon} alt="Search" />
          </SearchDiv>
        </Link>
        <Link to={"friends"}>
          <FooterImg src={firendIcon} alt="Friends" />
        </Link>
        <Link to={"feed"}>
          <FooterImg src={feedIcon} alt="Feed" />
        </Link>
      </Nav>
    </div>
  );
};
