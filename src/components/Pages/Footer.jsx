import Nav from "react-bootstrap/Nav";
import MediaLink from "../GeneralComponents/SocialLinks";
import "./Footer.css";


const Footer = () => {
    return (
        <>
            <div style={{ borderTop: "2px solid #fff " }}>
                <hr/>
            </div>
            <div className="footer-container">
                <Nav className="footer-main">
                    <Nav.Link href="Home" className="nav-link" style={{color:"#2b2b2b"}}>Home</Nav.Link>
                    <Nav.Link href="/Product" className="nav-link" style={{color:"#2b2b2b"}}>Product</Nav.Link>
                    <Nav.Link href="/Contact" className="nav-link" style={{color:"#2b2b2b"}}>Contact</Nav.Link>
                </Nav>
                <div className="social-links">
                    <MediaLink/>
                </div>
            </div>
        </>
    )
}

export default Footer