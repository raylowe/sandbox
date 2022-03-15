
import { useState } from "react";
import ReactModal from 'react-modal';

//actions
import ShowFirstModal from "../modal/_action/ShowFirstModal";
import ShowSecondModal from "../modal/_action/ShowSecondModal";

function Modal() {

    const [firstModalIsOpen, setFirstModalIsOpen] = useState(true)
    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false)

    /*
    Return notes
    onClick={() => openModal(true)} --> pass the onclick a function to execute
    Note if we simply tell it to execute the function it will run when react loads: onClick={(openModal(true))}
    */
    return (

        <div>
            <div onClick={() => setFirstModalIsOpen(true)}>Open Modal 1</div>
            <div onClick={() => setSecondModalIsOpen(true)}>Open Modal 2</div>

            <ShowFirstModal
                isOpen={firstModalIsOpen}
                setIsOpen={setFirstModalIsOpen}
            />
            <ShowSecondModal
                isOpen={secondModalIsOpen}
                setIsOpen={setSecondModalIsOpen}
            />
        </div>
    )
}

export default Modal