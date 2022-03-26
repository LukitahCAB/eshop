import React from "react";
const logo = <img className="navBar__logo__img" src={require("../../media/img/logo.png")} alt="logo"/>;

const NavBarComponents = () => {

    return (
        <div className="navBar__components">
            <li className="navBar__logo">
                {logo}
            </li>
            <ul className="navBar__elements">
                <a href="#">
                    Constelaciones
                </a>
                <a href="#">
                    Galaxias
                </a>
                <a href="#">
                    Estrellas
                </a>
                <a href="#">
                    Planetas
                </a>
            </ul>
            <li className="navBar__cart">
                CARRITO
            </li>
        </div>
    )

}

export default NavBarComponents;