import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return <div className="NavBar">
        <NavLink to="/">
            <button> Movies</button>
        </NavLink>
        <NavLink to="/signin">
            <button>Sign In</button>
        </NavLink>

    </div>;
}
export default NavBar;