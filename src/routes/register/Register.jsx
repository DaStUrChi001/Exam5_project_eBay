import React, { useState } from "react";
import "./Register.scss";
import { FcGoogle } from "react-icons/fc"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { auth, provider } from "../../firebase/Firebaseconfig";
import { useHistory} from "react-router-dom"
import { useDispatch } from "react-redux"
import instance from "../../api/instance"

const Register = () => {
    const navigate = useHistory()
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        avatar: ""
    })
    const createUserWithEmail = (e) => {
        e.preventDefault()
        instance.post("/users", userData)
            .then(response => {
                if(response.data.email){
                    dispatch({email: response.data.email, type: "CREATE_USER"});
                    navigate("/");
                }
            })
            .catch(err => console.log(err))
    }

    const createAccountWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className="register">
                <img width={117} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" alt="" />
                <p className="sign-in">Already a member? <a href="/login">Sign in</a></p>
                <div className="clear"></div>
                <div className="register-wrapper">
                    <h1>Create an account</h1>
                    <div className="form">
                        <form onSubmit={createUserWithEmail}>
                            <div className="name">
                                <input type="text" placeholder="First name" onChange={e => setUserData({...userData, firstname: e.target.value})}/>
                                <input type="text" placeholder="Last name" onChange={e => setUserData({...userData, lastname: e.target.value})}/>
                            </div>
                            <input type="email" placeholder="Email" onChange={e => setUserData({...userData, email: e.target.value})}/>
                            <input type="password" placeholder="Password" onChange={e => setUserData({...userData, password: e.target.value})}/>
                            <input type="url" placeholder="Avatar" onChange={e => setUserData({...userData, avatar: e.target.value})}/>
                            <p>By <strong>Creating an account</strong>, you agree to our <span>User Agreement</span>  and acknowledge reading our <span>User Privacy Notice</span>.</p>
                            <button type="submit">Create account</button>
                        </form>
                        <div className="lines">
                            <div className="line"></div>
                            <p>or</p>
                            <div className="line"></div>
                        </div>
                        <div className="register-with">
                            <button onClick={createAccountWithGoogle}><FcGoogle /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-footer">
                <p>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</p>
                <span>Accessibility</span>,
                <span>User Agreement</span>,
                <span>Privacy</span>,
                <span>Payments Terms of Use</span>,
                <span>Cookies</span>,
                <span>Your Privacy Choices</span> and
                <span>AdChoice</span>
                <AiOutlineExclamationCircle />
            </div>
        </>
    )
}

export default Register