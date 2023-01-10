import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "../../Routes";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";


function App() {
  return (
    <div className="main">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted brand">
            Helmut Fricker
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
           
            <LinkContainer to="/entertainment">
              <Nav.Link>Entertainment</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/bookbinding">
              <Nav.Link>Bookbinding</Nav.Link>
            </LinkContainer>
             <LinkContainer to="/bobbleheads">
              <Nav.Link>Bobbleheads</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;