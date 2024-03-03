import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbarStyle.css"
import MultiLang from "./multiLang";

const Navigation = () => {
    return (
        <>
            <div className="ok">
                <MultiLang/>
            </div>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/Home">Kral Tutun</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Home" className="nav-link">Home</Nav.Link>
                            <Nav.Link href="/Product">Product</Nav.Link>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;