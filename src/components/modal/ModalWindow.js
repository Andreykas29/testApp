import { AuthContext } from "./ModalContext";

import { useRef, useImperativeHandle, forwardRef, useContext } from "react";

const ModalWindow = forwardRef(({children, login, required},ref) => {
    const modalRef = useRef()
    
    const {logIn, addEmail} = useContext(AuthContext)
    const closeModal = () => {
        modalRef.current.close();
    }

    useImperativeHandle(ref, () => ({
        openModal: () => modalRef.current.showModal()
    }));

    const isModalLogin = login ? 'Log in' : 'Sign in'

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        const formObject = {};
        form.forEach((value, key) => {
            formObject[key] = value;
        });
        localStorage.setItem('loginData', JSON.stringify(formObject))
        closeModal()
        logIn()
        addEmail(e.target.email.value)
    }

    return (
        <dialog className={`modal ${login ? 'modal-login': ''}`} ref={modalRef}>
        <div className="modal-bg">
            <div className="modal-inner">
                <div className="modal-close" onClick={closeModal}>
                    <img src="images/exit.png" alt="exit"/>
                </div>
                <div className="modal-content">
                    <h3>{isModalLogin}</h3>
                    <form action="" onSubmit={handleSubmit} id={login ? 'formLogin': 'formSignIn'}>
                        {children}
                        <div className="modal-button sign-in" >
                            <button>{isModalLogin}</button>
                        </div>
                    </form>
                    <div className="have-account">
                        {login ? (
                            <>
                            <p>Don`t have an account?</p>
                            <a href="#">Sign Up</a>
                            </>
                        ): (
                            <>
                            <p>Already have an account?</p>
                            <a href="#">Log In</a>
                            </>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    </dialog>
    )
})

export default ModalWindow