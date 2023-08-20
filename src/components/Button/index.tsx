import styled from '@emotion/styled'

const StyledButton = styled('button')({
    backgroundColor: 'red',
})

interface Props {
    onClick: () => void
}
function Button({onClick}: Props) {
    const handleClick = () => {
        console.log('버튼이 클릭되었습니다')
        onClick()
    }
    return (
        <StyledButton type='button' onClick={handleClick}>나는 버튼입니다</StyledButton>
    )   
}  


export default Button