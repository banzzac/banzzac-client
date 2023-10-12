import styled from "@emotion/styled";

//Icons
import itemsList from "../../img/Icons/items-list.png";
import leftArrow from "../../img/Icons/left-arrow.png";
import masterImg from "../../img/profile/person.png";
import petImg from "../../img/profile/pet.png";
import { MasterImg, PetImg } from ".";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HCol = styled.div`
  &:first-child {
    width: 6%;
  }
  &:nth-child(2) {
    position: relative;
    width: 20%;
  }
  &:nth-child(3) {
    width: 65%;
  }
  &:last-child {
    width: 6%;
  }
`;
const Title = styled.p`
  margin: 0px;
`;
const LastJoinTime = styled.span``;
const LeftArrow = styled.img``;
const ItemsList = styled.img``;
const Footer = styled.div``;
const Input = styled.div``;
const MineBubble = styled.div``;
const OtherBubble = styled.div``;

const More = styled.img``;
const Emoticon = styled.img``;
const Mike = styled.img``;

export const ChatRoom = () => {
  return (
    <>
      <Header>
        <HCol>
          <LeftArrow src={leftArrow} />
        </HCol>
        <HCol>
          <MasterImg src={masterImg} />
          <PetImg src={petImg} />
        </HCol>
        <HCol>
          <Title>제안한 유저 이름-반려견 이름</Title>
          <LastJoinTime>00:00</LastJoinTime>
        </HCol>
        <HCol>
          <ItemsList src={itemsList} />
        </HCol>
      </Header>
    </>
  );
};
