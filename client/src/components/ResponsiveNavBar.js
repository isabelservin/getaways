import React from "react";

const ResponsiveNavBar = () => {

    return (
        <nav>
            <input id="nav-toggle" type="checkbox"></input>
            <div class="logo">G<strong>G</strong></div>
            <ul class="links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <label for="nav-toggle" class="icon-burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </label>
        </nav>
    )
}

export default ResponsiveNavBar