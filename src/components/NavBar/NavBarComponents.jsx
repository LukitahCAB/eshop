import React from "react";
import CartWidget from './Cart/CartWidget';

const logo = <img className="navBar__logo__img" src={require("../../media/img/logo.png")} alt="logo"/>;

export default function NavBarComponents () {

    return (
        <div>
            <nav>
                <div className="nav-wrapper deep-purple darken-3">
                    <a href="index.html" className="brand-logo center">{logo}</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="">Constelaciones</a></li>
                        <li><a href="">Galaxias</a></li>
                        <li><a href="">Estrellas</a></li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href=""> <CartWidget /> </a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}