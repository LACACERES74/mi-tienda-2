import React from "react"
import "./NavBar.css"
import CartWidget from "./CartWidget"

const NavBar = () => {



    return (
        <div className="nav">
            <h1>

                "Amelia Tejidos"
            </h1>
            

                <ul>
                    <li>
                        <a href="/">inicio</a>
                    </li>
                    <li>
                        <a href="">Gorros</a>
                    </li>
                    <li>
                        <a href="">Sacos</a>
                    </li>
                    <li>
                        <a href="">Sueter</a>
                    </li>
                </ul>
           
            <CartWidget/>
        </div>

    )
}


export default NavBar