import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const navItems = [
    {
      id: 1,
      title: "About",
      href: "/about",
    },
    {
      id: 2,
      title: "Projects",
      href: "/projects",
    },
    {
      id: 3,
      title: "Contact",
      href: "/contact",
    },
    {
      id: 4,
      title: "Blog",
      href: "/blog",
    },
  ];
  return (
    <Container>
      <nav className="flex items-center justify-end p-2">
        <div className="flex items-center gap-2 p-2">
          {navItems.map((item) => {
            return (
              <Link key={item.id} href={item.href}>
                {item.title}
              </Link>
            );
          })}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
