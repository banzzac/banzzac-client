import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// ㅇㅋ 한번 해봅시당, 그전에 저희 emotion/styled 사용할꺼라서 import바꿀게여, 사용 방식은 사실상 같은데, 다른 라이브러리 입니다!
import masterImg from "../../img/profile/person.png";
import petImg from "../../img/profile/pet.png";

const ChatTitle = styled.h2`
  padding: 19px 0px 25px 28px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 18.25px;
`;
const ChatSearchInput = styled.input`
  width: 85%;
  border-radius: 4px;
  border: 1px solid #efefef;
  padding: 11px 14px;
  background: #fff;
`;
const ChatRooms = styled.div``;
const ChatRoom = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 0px 13px 0px;
`;
const Column = styled.div`
  &:first-child {
    width: 30%;
    position: relative;
  }
  &:nth-child(2) {
    width: 100%;
  }
  &:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
  }
`;
export const MasterImg = styled.img`
  position: absolute;
  left: 20px;
  top: -8px;
  z-index: 1;
`;
export const PetImg = styled.img`
  position: absolute;
  left: 40px;
  bottom: -8px;
`;
const RoomTitle = styled.h4`
  font-size: 14px;
  padding-bottom: 2px;
`;
const RoomDescription = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 400;
  color: #777;
  line-height: 18px;
`;
const Ellipse22 = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  background-color: #bc92ff;
  color: #fff;
`;

const ChatLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Chat = () => {
  return (
    <>
      <ChatTitle>채팅</ChatTitle>
      <InputDiv>
        <ChatSearchInput placeholder="검색" />
      </InputDiv>
      <ChatRooms>
        <ChatLink to={`/chatroom/유저아이디`}>
          <ChatRoom>
            <Column>
              <MasterImg src={masterImg} />
              <PetImg src={petImg} />
            </Column>
            <Column>
              <RoomTitle>김하늘 - 짱구</RoomTitle>
              <RoomDescription>
                망원동 산책로 추천해주세요 이사와서 잘 몰라요 도움주시면
                감사하겠습니다
              </RoomDescription>
            </Column>
            <Column>
              <Ellipse22>1</Ellipse22>
            </Column>
          </ChatRoom>
        </ChatLink>
      </ChatRooms>
    </>
  );
};
