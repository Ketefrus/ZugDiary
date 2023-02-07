import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/navbar.scss';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className='navNew' style={{ maxHeight: '80px' }} fixed="bottom">
      <Container style={{ maxHeight: '80px' }} fluid>
        <Navbar.Brand href="/" className="gold">Diario de Zug</Navbar.Brand>
        <Navbar.Toggle className="gold" aria-controls="navbarScroll" />
        <Navbar.Collapse className="gold" id="navbarScroll">
          <Nav
            className="me-auto my-lg-0"
            style={{ maxHeight: '80px' }}
            navbarScroll
          >
            <Nav.Link className="gold" href="/">Inizio</Nav.Link>
            <Nav.Link className="gold" href="/amigoz">¿Amigoz?</Nav.Link>
            <NavDropdown drop='up' className="gold" title="Kapituloz" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/kapitulo-1">Kapitulo 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="gold" href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;