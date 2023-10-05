import styled from "@emotion/styled";

const StyledButton = styled("button")({
  backgroundColor: "red",
});

interface Props {
  onClick: () => void;
}
export const Button = ({ onClick }: Props) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledButton type="button" onClick={handleClick}>
      나는 버튼입니다
    </StyledButton>
  );
};
