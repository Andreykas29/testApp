import ModalDetail from "../modal/ModalDetail";

import { useRef } from "react";

export default function ValuesItem({title, image, description}) {
    const modalRef = useRef(); 
    const handleDetail = () => {
        modalRef.current.openModal();
    }
    return (
        <>
        <div className="values__item">
            <h3>{title}</h3>
            <img src={image} alt="values"/>
            <p>{description}</p>
            <button onClick={handleDetail}>View more</button>
        </div>
        <ModalDetail title={title} image={image} description={description} ref={modalRef}/>
        </>
    )
}