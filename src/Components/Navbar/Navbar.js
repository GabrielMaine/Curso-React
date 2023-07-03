import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget';
import img from './logo_navbar.png';

function NavBar() {
  return (
    <>
      <Navbar className="" bg="dark" data-bs-theme="dark">
        <Container className="w-100">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <Navbar.Brand className="align-self-center" href="#home"><img src={img} alt="logo" height='100px' width='100px' /></Navbar.Brand>
            </div>
            <div>
              <Nav className="me-auto">
                <Nav.Link className="align-self-center" href="#Tradicionales">Tradicionales</Nav.Link>
                <Nav.Link className="align-self-center" href="#Gourmet">Gourmet</Nav.Link>
                <Nav.Link className="align-self-center" href="#Vegetarianas">Vegetarianas</Nav.Link>
                <Nav.Link className="align-self-center" href="#Especiales">Especiales</Nav.Link>
                <Nav.Link className="align-self-center" href="#pricing"><CardWidget/></Nav.Link>
              </Nav>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;