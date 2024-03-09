import React from "react"
import { Header } from "./Header"
import { Section } from "./section"
import { Section2 } from "./section2"
import { Section3 } from "./section3"
import { Section4 } from "./section4"
import { Context as Theme } from "../../context/Theme"
import "./section.scss"
function Homemain() {
    const {theme} = React.useContext(Theme)
    return (

        <>
            <Header />
            <Section />
            <Section2 />
            <Section3 />
            <Section4 />
            
        </>
    )
}
export { Homemain }