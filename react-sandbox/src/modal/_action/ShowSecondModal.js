import styled from "styled-components";
import Modal from "../modal";

import CloseButton from "../../components/CloseButton";


const StyledModal = styled(Modal)`
.Overlay {
    z-index: 1;
  }

  .Modal {
    display: flex;
    flex-direction: column;
    height: auto;
    max-height: 90%;
    min-height: 80%;
    max-width: 70%;
    min-width: 50%;
    overflow: none;
    width: auto;
  }
`;

function ShowSecondModal({ isOpen, setIsOpen }) {
    return (
        <StyledModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            contentLabel={"content-label"}
        >
            <h1>ShowSecondModal</h1>
            <p>Is This The Child element 2</p>
            <CloseButton 
                setIsOpen={setIsOpen}
            />
        </StyledModal>
    )
}
export default ShowSecondModal