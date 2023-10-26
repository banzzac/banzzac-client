import styled from "@emotion/styled";

const BackgroundCircle = styled.div<{ size: number }>`
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  aspect-ratio: 1/1;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    180deg,
    rgba(185, 185, 185, 0.2) 0%,
    rgba(255, 255, 255, 0) 8.57%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export default function Background() {
  return (
    <>
      <BackgroundCircle size={262}></BackgroundCircle>
      <BackgroundCircle size={558}></BackgroundCircle>
      <BackgroundCircle size={968}></BackgroundCircle>
    </>
  );
}
