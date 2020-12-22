import { Nav, Navbar, Image, Dropdown } from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";
import React from "react";

const pathnames = [
  { href: "/", label: "home" },
  {
    href: "/allproducts",
    label: "stores ",
    subMenus: [
      { name: "กล้องวงจรปิด" },
      { name: "เครื่องบันทึกDVR" },
      { name: "  เครื่องสแกน" },
      { name: "  นาฬิกายาม (Guardtour)" },
      { name: "  โดรนถ่ายภาพ (Drone)" },
      { name: "  การ์ด Card" },
      { name: "เครื่องทาบบัตร (Reader Card)" },
      { name: "  เครื่องอ่านการ์ด(Access Control)" },
      { name: "  ชุดกลอนแม่เหล็กไฟฟ้า" },
      { name: "ระบบแจ้งเตือนเพลิงใหม้" },
      { name: "  สัญญาณกันขโมย" },
      { name: " GPS ติดตามรถยนต์" },
      { name: "  Network accessories" },
      { name: "  ประตู" },
      { name: "  เว็บไซต์" },
      { name: "  ตู้สาขาโทรศัพท์" },
      { name: " รั้วไฟฟ้า" },
      { name: "  บ้านอัจฉริยะ (HomeXpert)" },
      { name: "  อุปกรณ์ความปลอดภัยส่วนบุคคล" },
      { name: "  งานจราจร" },
      { name: "  ระบบ POS" },
      { name: " Video Conference" },
      { name: "  ระบบห้องประชุม" },
      { name: " ระบบที่จอดรถ" },
      { name: "  ตู้เซฟ" },
      { name: "  LED Display" },
      { name: "  Accessories" },
      { name: "  ระบบประตูกั้นทางเดิน" },
      { name: " เครื่องทำลายเอกสาร" },
      { name: "  เครื่องบันทึกเวลา" },
      { name: "  รับทำและออกแบบเว็บไซต์" },
      { name: "  ระบบออกบัตรประจำตัว" },
      { name: "  เครื่องพับเอกสาร" },
      { name: "  กริ่งสนทนา (VDO PHONE)" },
    ],
  },
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
            {pathnames.map(function (pathname, i) {
              if (pathname.subMenus !== undefined) {
                return (
                  <Navbar>
                    <Dropdown>
                      <NavLink style={{color:'#343a40'}} to={`${pathname.href}`}>
                        {`${pathname.label}`}
                      </NavLink>
                      <Dropdown.Toggle split id="dropdown" />
                      <Dropdown.Menu key={i} alignRight style={{}}>
                        {pathname.subMenus.map(function (subMenu, i) {
                          return (
                            <Dropdown.Item key={i}>
                              <ul>{subMenu.name}</ul>
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Navbar>
                );
              } else {
                return (
                  <>
                    <Navbar>
                      <Link key={i} className="link" to={pathname.href} exact>
                        <li>{pathname.label}</li>
                      </Link>
                    </Navbar>
                  </>
                );
              }
            })}
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
