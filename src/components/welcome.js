import React from "react"
import ReactDOM from "react-dom"
import Img1 from "../images/X.jpg"
import Img2 from "../images/google.png"
import Img3 from "../images/apple.png"

export default function login() {
 
    return(
        <div className="twitter">
            <div className="welcome">
                <div className="left">
                    <img src={Img1} className="left--img"/>
                </div>
                <div className="right">
                    <h1 className="tit-1">Happening now</h1>
                    <h2 className="tit-2">Join today.</h2>
                    <div className="buttons">
                        <button className="sign--google">
                            <img src={Img2} className="google"/>Sign up with Google
                        </button>
                        <button className="sign--apple">
                            <img src={Img3} className="apple"/>
                            <h4>Sign up with Apple</h4>
                        </button>
                        <div className="line">
                            <hr></hr>
                            <h4 className="or">or</h4>
                            <hr></hr>
                        </div>
                        <button className="create--acc">
                            Create account
                        </button>
                        <div className="t-c1">
                            <h>By signing up, you agree to the</h>
                            <a className="terms--cond" href="#"> Terms of service </a>
                            <h>and</h>
                            <a className="terms--cond" href="#">privacy</a>
                        </div>
                        <div className="t-c2">
                            <a className="terms--cond" href="#">policy,</a>
                            <h>including</h>
                            <a className="terms--cond" href="#">
                                <span> Cookie Use.</span>
                            </a>
                        </div>
                    </div>
                    <div className="al-ac">
                        <h3>Already have an account</h3>
                        <button className="signin">Sign in</button>
                    </div>
                </div>
            </div>
            <div className="footer1">
                <a href="#">About</a>
                <a href="#">Download the X app</a>
                <a href="#">Help Center</a>
                <a href="#">Terms of service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Accessibility</a>
                <a href="#">Ads info</a>
                <a href="#">Blog</a>
                <a href="#">Status</a>
                <a href="#">Careers</a>
                <a href="#">Brand Resources</a>
                <a href="#">Advertising</a>
                <a href="#">Marketing</a>
                <a href="#">X for Business</a>
                <a href="#">Developers</a>
                <a href="#">Directory</a>
            </div>
            <div className="footer2">
                <a href="#">Settings</a>
                <a href="#">@2024 X Crop.</a>
            </div>
        </div>
    )
}