import styled from "@emotion/styled";

interface Props {
  frontImgSrc: string;
  backImgSrc: string;
  borderColor: string;
  className?: string;
}

const Container = styled.div``;

const Background = styled.div<{ borderColor?: string }>`
  width: fit-content;
  border-radius: 50%;
  padding: 4px;
  background: ${({ borderColor }) => `conic-gradient(
    ${borderColor} 90deg,
    transparent 90deg 180deg,
   ${borderColor} 180deg
  )`};
`;

const ImgWrapper = styled.div`
  padding: 2px;
  width: fit-content;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const FrontImgWrapper = styled(ImgWrapper)`
  z-index: 1;
  position: relative;
`;

const BackImgWrapper = styled(ImgWrapper)<{ borderColor?: string }>`
  position: absolute;
  top: 27px;
  left: 27px;
  border: ${({ borderColor }) => `4px solid ${borderColor}`};
`;

export const PeanutProfile = ({
  frontImgSrc,
  backImgSrc,
  borderColor,
  className,
}: Props) => {
  return (
    <Container className={className}>
      <Background borderColor={borderColor}>
        <FrontImgWrapper>
          <img
            width={54}
            height={54}
            src={frontImgSrc}
            alt="front-profile"
            className="Img__FrontProfile"
          />
        </FrontImgWrapper>
      </Background>
      <BackImgWrapper borderColor={borderColor}>
        <img
          width={54}
          height={54}
          src={backImgSrc}
          alt="back-profile"
          className="Img__BackProfile"
        />
      </BackImgWrapper>
    </Container>
  );
};
