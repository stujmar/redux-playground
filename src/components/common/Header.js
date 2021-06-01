import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
const activeStyle = {color: "#F15B2A"}

    return (
        <nav  style={{paddingBottom: "12px"}}>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/courses" activeStyle={activeStyle} exact>Courses Page</NavLink>{" | "}
            <NavLink to="/about" activeStyle={activeStyle} exact>About</NavLink>
        </nav>
    )
}

export default Header;