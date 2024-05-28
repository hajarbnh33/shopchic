import React from "react";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    return(
        <footer>
            <FontAwesomeIcon icon={faCopyright}/>
            <p>Shop Chic</p>         
        </footer>
    )
}

export default Footer;