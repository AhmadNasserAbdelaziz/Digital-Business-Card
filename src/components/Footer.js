import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
         <div className="footer">
        <div className="footericons">
        <FontAwesomeIcon icon={faTwitter} size="2x" ></FontAwesomeIcon>

        <FontAwesomeIcon icon={faFacebook} size="2x" ></FontAwesomeIcon>

        <FontAwesomeIcon icon={faInstagram} size="2x" ></FontAwesomeIcon>

        <FontAwesomeIcon icon={faGithub} size="2x" ></FontAwesomeIcon>
        </div>
         </div>
        )
}