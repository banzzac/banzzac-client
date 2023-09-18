import styled from "@emotion/styled";

// ㅇㅋ 한번 해봅시당, 그전에 저희 emotion/styled 사용할꺼라서 import바꿀게여, 사용 방식은 사실상 같은데, 다른 라이브러리 입니다!
import person from "../../img/profile/person.png";
import pet from "../../img/profile/pet.png";

const ChatTitle = styled.h2`
  padding-top: 19px;
  padding-left: 28px;
  color: #000;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;
const ChatSearchInput = styled.input`
  display: flex;
  width: 92%;
  padding: 11px 14px;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid #efefef;
  background: #fff;
`;
const ChatRooms = styled.div`
  padding: 0px 10px 0px 30px;
`;

const ChatRoom = styled.div`
  display: flex;
`;
// 저 밑에 chat__room__col 로 선언된 애들도 styled 형식으로 먼저 바꿔볼게요
const Column = styled("div")({});
// const Title = styled("h4")({});

export const Chat = () => {
  return (
    <>
      <ChatTitle>채팅</ChatTitle>
      <ChatSearchInput />
      <ChatRooms>
        {/* 잠깐 종우야 미안한데, 지금 카페가 끝나 집가서 들어와야하는데 늦을듯한데 ;;이거 일단 내가 깃헙에 넣어둘게
        ㄱㄱㄱㄱㄱㄱ응 리모트가 뭐고 드레프트 pr 은 뭐지...? 새로운 브랜치 만들어서 거기다가 올리면 된거?
        ㅇㅅㅇ 할수 있지 새로운 브랜치니까
        알겠옹 chat-1 일거야*/}
        {/* 그 깃헙 remote에 올리고 draft pr로 올려줄 수 있어? */}

        {/* git push 하는거, ㄴㄴ 그냥 지금 브랜치를 */}
        {/* 지금 작업하고있는거 커밋 하고, 그 깃헙데스크탑에서 push 하는거! 그거 하고, 아니다, 그거 하고 브랜치 이름만 알려줘! */}
        {/* ㅇㅋ! */}
        <ChatRoom>
          <Column>
            <img src={person} alt="주인" />
            <img src={pet} alt="반려동물" />
          </Column>
          <Column>
            <h4 className="chat__room__title">김하늘 - 짱구</h4>
            <p className="chat__room__description">
              망원동 산책로 추천해주세요. 이사와서 잘 몰라요. 도움주시면
              감사하겠습니다.
            </p>
          </Column>
          <Column>
            <div className="ellipse22"></div>
          </Column>
        </ChatRoom>
      </ChatRooms>
    </>
  );
};
