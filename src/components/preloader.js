import React from "react"
import ReactDOM from 'react-dom'
import Img from "../images/X.jpg"

export default function blank(){
    function load(){
        let loader = document.getElementById("preloader");
        return(
            window.addEventListener("load", function(){
                loader.style.display = "none";
            })
        )
      }
    return(
        <div className="preloader">
            <img src={Img} className="preloader--img"/>
        </div>
    )
}     