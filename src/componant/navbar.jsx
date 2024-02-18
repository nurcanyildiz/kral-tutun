import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import "./navbarStyle.css"
import NavbarLinks from "./NavbarLinks";

function Navbar() {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <>
            <header>
                <h3>Logo</h3>

                <div className="navbar-links">
                    <NavbarLinks
                        link1="Home"
                        link2="Product"
                        link3="Contact"
                    />
                </div>

                <nav ref={navRef}>
                    <button className="nav-btn nav-close-btn"
                            onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>

                <button className="nav-btn"
                        onClick={showNavbar}>
                    <FaBars/>
                </button>
            </header>
        </>
    );
};

export default Navbar