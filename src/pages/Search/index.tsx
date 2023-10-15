import { PeanutProfile } from "@components/PeanutProfile";
import Background from "@containers/Search/Background";
import styled from "@emotion/styled";
import useWindowSize from "@hooks/useWindowSize";
import { generatePos } from "@utils/Search";

import profileImg from "@/img/profile/profile.png";
import petImg from "@/img/profile/profile_pet.png";

const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const Profile = styled(PeanutProfile)<{ pos: { x: number; y: number } }>`
  position: absolute;
  top: ${({ pos }) => `${pos.y}px`};
  left: ${({ pos }) => `${pos.x}px`};
`;

const STATE = ["COMMON", "RECEIVED", "SEND"];

const setState = () => {
  const idx = Math.floor(Math.random() * 3);
  return STATE[idx];
};

export const Search = () => {
  const { width, height } = useWindowSize();

  // 렌더링을 위한 임시 random util, 서버에서 주변인의 gps 위치를 받아오면 그에 따라 pos 계산하는 util 재구현 예정
  const samleData = [
    {
      pos: { ...generatePos(width - 100, height - 54) },
      state: setState(),
    },
    {
      pos: { ...generatePos(width - 100, height - 54) },
      state: setState(),
    },
    {
      pos: { ...generatePos(width - 100, height - 54) },
      state: setState(),
    },
    {
      pos: { ...generatePos(width - 100, height - 54) },
      state: setState(),
    },
    {
      pos: { ...generatePos(width - 100, height - 54) },
      state: setState(),
    },
    {
      pos: { ...generatePos(width - 100, height - 54) },
      state: setState(),
    },
  ];

  return (
    <Container>
      <Background />
      {samleData.map(({ pos, state }, idx) => (
        <Profile
          key={idx}
          pos={pos}
          frontImgSrc={profileImg}
          backImgSrc={petImg}
          borderColor={
            state === "RECEIVED"
              ? "#31E1AA"
              : state === "SEND"
              ? "#BC92FF"
              : undefined
          }
        />
      ))}
    </Container>
  );
};
