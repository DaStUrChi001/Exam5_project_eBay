import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss"
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFillCheckSquareFill, BsApple, BsFillExclamationCircleFill } from "react-icons/bs"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { auth, provider } from "../../firebase/Firebaseconfig";
import { useHistory} from "react-router-dom"
import { useDispatch } from "react-redux"
import instance from "../../api/instance"

const Login = () => {
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
                    dispatch({email: response.data.email, type: "CREATE_USER"})
                    navigate("/")
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
            <div className="login">
                <span className="tell-us">Tell us what you think</span>
                <img width={117} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" alt="" />
                <div className="clear"></div>
                <div className="login-wrapper">
                    <div className="title">
                        <h1>Hello</h1>
                        <p>Sign in to eBay or <Link className="register" to="/register">create an account</Link></p>
                    </div>
                    <form className="login-form" onSubmit={createUserWithEmail}>
                        <input type="email" placeholder="Email or username" onChange={e => setUserData({...userData, email: e.target.value})}/>
                        <pre>Created your account with a mobile number?<br></br><span>Sign in with mobile</span></pre>
                        <button type="submit">Continue</button>
                    </form>
                    <div className="lines">
                        <div className="line"></div>
                        <span>or</span>
                        <div className="line"></div>
                    </div>
                    <div className="login-with-social">
                        <button><FaFacebookSquare />Continue with Facebook</button>
                        <button onClick={createAccountWithGoogle}><FcGoogle />Continue with Google</button>
                        <button><BsApple />Continue with Apple</button>
                        <div className="texts">
                            <p><BsFillCheckSquareFill /> Stay signed in</p>
                            <p>Using a public or shared device?</p>
                            <p>Uncheck to protect your account.</p>
                            <span>Learn more </span>
                        </div>
                    </div>
                    <div className="box">
                        <BsFillExclamationCircleFill />
                        <p>With this box checked, we'll keep you signed in, making it easier to bid and buy. You'll also be all set to pay if you've saved your payment info. You can always turn off this feature in My eBay. We may ask you to sign in again for some activities, such as making changes to your account.</p>
                    </div>
                </div>
            </div>
            <div className="login-footer">
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

export default Login