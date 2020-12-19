import { Nav, Navbar, Image } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";
const pathnames = [
  { href: "/", label: "camera" },
  { href: "/", label: "IOT" },
  { href: "/", label: "security" },
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
          <Nav.Link path="/">
            <picture>
              <img
                src="/logo-title.png"
                alt="AST"
                width={64}
                height={42}
                quality="70%"
              />
            </picture>
          </Nav.Link>
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
                style={{ marginLeft: "50px", marginBottom: "5px" }}
                src="../../../cart.png"
                width="25px"
              />
              <span
                style={{ marginLeft: "20px", marginRight: "40px" }}
                className="snipcart-total-price font-weight-bold link"
              >
                ฿ 0.00
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
