import styled from "styled-components";

const StyledButton = styled.div`
    .closeButton{
        border: 1px solid #336699;
    }
`

function CloseButton({ setIsOpen }) {
    return (
        <StyledButton>
            <div className="closeButton" onClick={() => setIsOpen(false)}>This Will Close This Modal</div>
        </StyledButton>

    )
}
export default CloseButton
