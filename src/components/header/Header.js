import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <header>
            <img src="/assets/logo.png" alt="logo" id="logo"/>
            <h1 translate="no">Shop Chic</h1>
            <div className="container_nav">
                <FontAwesomeIcon icon={faSearch}/>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </div>            
        </header>
    )
}

export default Header;