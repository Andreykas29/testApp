import { useRef, useImperativeHandle, forwardRef, useContext } from "react"

const ModalDetail = forwardRef(({title, image, description},ref) => {
    const modalRef = useRef()
    
    const closeModal = () => {
        modalRef.current.close();
    }

    useImperativeHandle(ref, () => ({
        openModal: () => modalRef.current.showModal()
    }));


    return (
        <dialog className="modal modal-detail" ref={modalRef}>
        <div className="modal-bg">
            <div className="modal-inner">
                <div className="modal-close" onClick={closeModal}>
                    <img src="images/exit.png" alt="exit"/>
                </div>
                <div className="modal-content">
                    <h3>{title}</h3>
                    <img src={image} alt="detail" />
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
    </dialog>
    )
})

export default ModalDetail