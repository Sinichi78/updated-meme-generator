import "./style.css"
import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"

export default function App(){
  return(
    <div className ="sub-main">
      <Header/>
      <Meme/>
    </div>
  )
}