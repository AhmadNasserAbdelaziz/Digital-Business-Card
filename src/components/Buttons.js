import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Buttons() {

    return (
       <div className="buttons">
           
           <a href="mailto:ahmadnabdelaziz@outlook.com">
           <button className="EmailButton" >
            <FontAwesomeIcon icon={faEnvelope} color="black"></FontAwesomeIcon>
            &nbsp; Email</button>
           </a> 
            
            <a href="https://www.linkedin.com/in/ahmad-n-abedalaziz-507aa6196/">
           <button className="LinkedinButton">
          
            <FontAwesomeIcon icon={faLinkedin} > </FontAwesomeIcon>
             &nbsp; Linkedin</button>
             </a>
       </div>    
    )

} 