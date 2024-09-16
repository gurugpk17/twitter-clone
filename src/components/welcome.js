import React from "react";
import Img1 from "../images/X.jpg";
import Img2 from "../images/google.png";
import Img3 from "../images/apple.png";

export default function Login() {
    return (
        <div className="twitter">
            <div className="welcome">
                <div className="left">
                    <img src={Img1} className="left--img" alt="Left banner" />
                </div>
                <div className="right">
                    <h1 className="tit-1">Happening now</h1>
                    <h2 className="tit-2">Join today.</h2>
                    <div className="buttons">
                        <button className="sign--google">
                            <img src={Img2} className="google" alt="Google logo" /> Sign up with Google
                        </button>
                        <button className="sign--apple">
                            <img src={Img3} className="apple" alt="Apple logo" />
                            <h4>Sign up with Apple</h4>
                        </button>
                        <div className="line">
                            <hr />
                            <h4 className="or">or</h4>
                            <hr />
                        </div>
                        <button className="create--acc">
                            Create account
                        </button>
                        <div className="t-c1">
                            <p>By signing up, you agree to the 
                                <a className="terms--cond" href="/terms-of-service"> Terms of service </a> and 
                                <a className="terms--cond" href="/privacy"> Privacy </a>.
                            </p>
                        </div>
                        <div className="t-c2">
                            <a className="terms--cond" href="/policy"> Policy,</a>
                            <p>including</p>
                            <a className="terms--cond" href="/cookie-use">
                                <span> Cookie Use.</span>
                            </a>
                        </div>
                    </div>
                    <div className="al-ac">
                        <h3>Already have an account?</h3>
                        <button className="signin">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer1">
                <a href="/about">About</a>
                <a href="/download">Download the X app</a>
                <a href="/help">Help Center</a>
                <a href="/terms-of-service">Terms of service</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/cookie-policy">Cookie Policy</a>
                <a href="/accessibility">Accessibility</a>
                <a href="/ads-info">Ads info</a>
                <a href="/blog">Blog</a>
                <a href="/status">Status</a>
                <a href="/careers">Careers</a>
                <a href="/brand-resources">Brand Resources</a>
                <a href="/advertising">Advertising</a>
                <a href="/marketing">Marketing</a>
                <a href="/x-for-business">X for Business</a>
                <a href="/developers">Developers</a>
                <a href="/directory">Directory</a>
            </div>
            <div className="footer2">
                <a href="/settings">Settings</a>
                <a href="/2024x">@2024 X Corp.</a>
            </div>
        </div>
    );
}
