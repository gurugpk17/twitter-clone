import {useEffect, useState} from "react"
import React from "react"

import Welcome from "./components/welcome"
import Preloader from "./components/preloader"
import CreateAcc from "./components/create-acc"

export default function App (){

  const [isLoading, Loading] = useState(true)
  useEffect(() => {
      setTimeout(() => {
        Loading(false)
      },2000)
    }
 );
   return isLoading ?(
     <Preloader />
     ) : (
    // <Welcome />
    <div>
    <Welcome />
    <CreateAcc />
    </div>
  // return (
  //   <div>
  //     <CreateAcc />
  //   </div>
  )
}