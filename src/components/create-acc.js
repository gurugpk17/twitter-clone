import React from "react";
import Img from "../images/twitter1.png";
import './create-acc.css';
import Dropdown from "./Dropdown"; // Ensure Dropdown component is implemented

export default function CreateAcc() {
    return (
        <div className="acc--create">
            <div className="acc--bg"></div>
            <div className="acc--details">
                <div className="header">
                    <div className="close">
                        <h1 className="x">X</h1> {/* Changed <h> to <h1> */}
                    </div>
                    <div className="icon">
                        <img src={Img} className="logo" alt="Twitter logo" /> {/* Added alt attribute */}
                    </div>
                </div>
                <div className="det">
                    <h1 className="title">Create your account</h1>
                    <form className="acc-info">
                        <div className="text-box1">
                            <input type="text" className="text1" placeholder="Name" required /> {/* Using placeholder attribute */}
                        </div>
                        <div className="text-box2">
                            <input type="text" className="text1" placeholder="Phone" required />
                        </div>
                        {/* <div >
                            <input type="email" className="text1" placeholder="Email" required />
                        </div> */}
                    </form>
                    <div className="dob">
                        <h3>Date of birth</h3>
                        <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p> {/* Replaced <h> with <p> */}
                        <div className="input--field">
                            <Dropdown placeholder="Month" /> {/* Implement Dropdowns for better user experience */}
                            <Dropdown placeholder="Day" />
                            <Dropdown placeholder="Year" />
                        </div>
                    </div>
                    <div className="next">
                        <button className="next-but">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
