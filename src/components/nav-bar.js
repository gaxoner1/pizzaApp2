import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
import SignupButton from "./signup-button"


const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/order"
      exact
      activeClassName="router-link-exact-active"
    >
      Order
    </Nav.Link>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  const SignOrRegBtns = (
      <div>
        <LoginButton /> <SignupButton />
      </div>
  );

  return (
    <Nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : SignOrRegBtns }
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
      <Navbar.Brand href="/">PIZZA 42</Navbar.Brand>
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
