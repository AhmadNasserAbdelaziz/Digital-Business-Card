import React from "react"
import PersonalPicture from "../images/PersonalPicture.jpg"

export default function Photo() {
    return (
     <img src={PersonalPicture} alt="Personal" className="PersonalPicture" />
    )
}