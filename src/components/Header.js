import ModalWindow from "./modal/ModalWindow"
import Input from "./UI/Input";
import { AuthContext } from "./modal/ModalContext";

import { useRef, useContext } from "react";

export default function Header() {
    const modalSignInRef = useRef();
    const modalLogInRef = useRef();
    const {logOut, isLoggined, email} = useContext(AuthContext)

    const openModalSignIn = () => {
        modalSignInRef.current.openModal()
    }
    const openModalLogIn = () => {
        modalLogInRef.current.openModal()
    }

    return (
        <>
        <header>
        <div className="container">
            <div className="header__wrapper">
                <div className="logo">
                    <img src="images/Logo.png" alt="logo"/>
                    <h3 className="logo-name">Company Name</h3>
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Success Stories</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </nav>
                {isLoggined ? (
                    <>
                    <div className="profile">
                    <img src="images/profile.png" alt="profile" className="profile_image" onClick={logOut}/>
                    <p className="profile__name">{email}</p>
                    </div> 
                    </>
                ) : (
                    <>
                    <div className="login">
                    <p onClick={openModalSignIn}>Sign In</p>
                    <p onClick={openModalLogIn}>Log In</p>
                    </div>
                    </>
                )}
            </div>
        </div>
    </header>
        <ModalWindow ref={modalSignInRef}>
            <Input id="fullname-signIn" placeholder="Name Surname" name="full-name"required>Full Name</Input>
            <Input id="email-signIn" type="email" placeholder="Mail" name="email"required>Your Email</Input>
            <Input id="password-signIn" type="password" placeholder="Password" name="password"required>Password</Input>
            <Input id="id="phone-signIn placeholder="Phone" name="phone">Your Phone</Input>

            <div className="policy">
                <input id="agreePolicy" type="checkbox"/>
                <label htmlFor="agreePolicy">Yes, I have read and agree to Privacy Policy</label>
            </div>
        </ModalWindow>

        <ModalWindow ref={modalLogInRef} login>
            <Input id="email-login" type="email" placeholder="Mail" name="email"required>Your Email</Input>
            <Input id="password-login" type="password" placeholder="Password" name="password"required>Password</Input>
        </ModalWindow>
        </>
    )
}