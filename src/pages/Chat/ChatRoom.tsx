import styled from "@emotion/styled";

//Icons
import emoticon from "../../img/Icons/Emoticon.png";
import itemsList from "../../img/Icons/items-list.png";
import leftArrow from "../../img/Icons/left-arrow.png";
import mic from "../../img/Icons/Mic.png";
import more from "../../img/Icons/More.png";
import masterImg from "../../img/profile/person.png";
import petImg from "../../img/profile/pet.png";
import { MasterImg, PetImg } from ".";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 5;
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

const Main = styled.main`
  padding-top: 30px;
`;
const StartChat = styled.p``;
const TheEndChat = styled.p``;
const OfferDiv = styled.div``;
const OfferBtn = styled.button``;
const ApproveBtn = styled.button``;
const RefuseBtn = styled.button``;
const MineBubble = styled.div``;
const OtherBubble = styled.div``;

const Footer = styled.footer`
  display: flex;
`;
const InputDiv = styled.div``;
const Input = styled.input``;
const More = styled.img``;
const Emoticon = styled.img``;
const Mic = styled.img``;

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

      <Main>
        {/* 대화의 첫 시작일 경우 채팅방이 시작되었습니다. */}
        <StartChat>---생성되었습니다---</StartChat>
        <OtherBubble>
          산책을 제안하겠습니다. 제 친구가 개거든요, 같이 구경가실래요?
        </OtherBubble>
        <MineBubble>아니요, 전 호랑이가 좋아요.</MineBubble>
        <TheEndChat>---산책이 종료되었습니다---</TheEndChat>
        <OfferDiv>
          {/*초대하는 사람에게는 산책 제안하기 버튼이 보여야 하고, 초대를 받는 사람에는 초대 승인과 거절버튼이 있어야 한다.  */}
          <OfferBtn>산책 제안하기</OfferBtn>
          {/* <ApproveBtn>수락하기</ApproveBtn>
          <RefuseBtn>거절하기</RefuseBtn> */}
        </OfferDiv>
      </Main>

      <Footer>
        <More src={more} />
        <InputDiv>
          <Input />
          <Emoticon src={emoticon} />
        </InputDiv>
        <Mic src={mic} />
      </Footer>
    </>
  );
};
