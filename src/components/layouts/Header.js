import { Nav, Navbar, Image } from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";
import React from "react";
const pathnames = [
  { href: "/", label: "home" },
  { href: "/allproducts", label: "all products " },
  { href: "/contact", label: "Contact" },
];
export default function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="light"
        variant="light"
      >
        <Navbar.Brand ml="50px">
          <NavLink to="/">
            <picture>
              <img
                src="/logo-title.png"
                alt="AST-logo"
                width={64}
                height={42}
                quality="70%"
              />
            </picture>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-uppercase font-weight-bold ">
            {pathnames.map((pathname) => (
              <Link
                className="link"
                key={pathname.label}
                to={pathname.href}
                exact
              >
                <li>{pathname.label}</li>
              </Link>
            ))}
          </Nav>

          <Nav>
            <Link style={{ textDecoration: "none" }} width={50} height={50}>
              <Image
                style={{
                  marginLeft: "20px",
                  marginBottom: "5px",
                  marginRight: "50px",
                }}
                src="../../../cart.png"
                width="25px"
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
