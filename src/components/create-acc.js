import React from "react"
import ReactDOM from "react-dom"
import Img from "../images/twitter1.png"
import './create-acc.css'
import Dropdown from "./Dropdown"

export default function createAcc() {
    return(
        <div className="acc--create">
            <div className="acc--bg"></div>
            <div className="acc--details">
                <div className="header">
                    <div className="close">
                        <h className="x">X</h>
                    </div>
                    <div className="icon">
                        <img src={Img} className="logo"/>
                    </div>
                </div>
                <div className="det">
                        <h1 className="title">Create your account</h1>
                    <form className="acc-info">
                        <input className="text" type="text" placeholder="Name"/>
                        <input className="text" type="text" placeholder="Phone"/>
                    </form>
                    <a className="email-ins" href="#">Use email instead</a>
                    <div className="dob">
                        <h3>Date of birth</h3>
                        <h>This will not be shown publicy. Confirm your own age, even if this account is for a business, a pet, or something else.</h>
                        <div className="input--field">
                            <input className="text1" type="text" placeholder="Month"/>
                            <input className="text1" type="text" placeholder="Day"/>
                            <input className="text1" type="text" placeholder="Year"/>
                        </div>
                    </div>
                    <div className="next">
                        <button className="next-but">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



