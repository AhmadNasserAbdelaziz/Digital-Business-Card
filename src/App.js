import React from "react"
import Photo from './components/Photo';
import Name from './components/Name';
import Buttons from "./components/Buttons";
import About from "./components/About";
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="page">
            <div className="container">
            <Photo />
            <Name />
            <Buttons/>
            <About/>
            <Footer/>
            </div>
        </div>
    )
}