import React from "react";
import { Header } from "../Home/Header";
import { Section } from "../Home/section";
import Img from "../../lib/img/youtube_error.png"
function Eror(){
    return(
        <div className="container">
        <Header />
        <Section />
        <img className="dontwork" src={Img} alt="error"  width={1200} height={600} />
        
        </div>
    )
}

export {Eror};