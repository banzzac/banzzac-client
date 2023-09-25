import styled from "@emotion/styled";

// ㅇㅋ 한번 해봅시당, 그전에 저희 emotion/styled 사용할꺼라서 import바꿀게여, 사용 방식은 사실상 같은데, 다른 라이브러리 입니다!
import masterImg from "../../img/profile/person.png";
import petImg from "../../img/profile/pet.png";

const ChatTitle = styled.h2``;
const ChatSearchInput = styled.input``;
const ChatRooms = styled.div``;

const ChatRoom = styled.div``;

// 저 밑에 chat__room__col 로 선언된 애들도 styled 형식으로 먼저 바꿔볼게요
const MasterImg = styled.img``;
const PetImg = styled.img``;
const Column = styled.div``;
const RoomTitle = styled.h4``;
const RoomDescription = styled.p``;
const Ellipse22 = styled.div``;

export const Chat = () => {
  return (
    <>
      <ChatTitle>채팅</ChatTitle>
      <ChatSearchInput />
      <ChatRooms>
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
      </ChatRooms>
    </>
  );
};
