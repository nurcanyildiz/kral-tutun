import React from "react";
import {Link} from "react-router-dom";

function NavbarLinks(props) {

    return (
        <>
            <nav>
                <Link to="/Home">{props.link1}</Link>
                <Link to="/Product">{props.link2}</Link>
                <Link to="/Contact">{props.link3}</Link>
            </nav>
        </>
    );
};

export default NavbarLinks




