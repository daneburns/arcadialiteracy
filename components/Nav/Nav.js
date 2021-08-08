import React from "react";
import Logo from "../Logo";
import NavItem from "./NavItem";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-brown-500 text-cloud-500 z-20">
      <div className="flex flex-row justify-start px-10 py-4 items-center">
        <div className="h-auto w-48 hover:text-white">
          <Link href="/">
            <a href="/">
              <Logo variant={true} />
            </a>
          </Link>
        </div>

        <div className="center hidden md:flex flex flex-row mx-auto space-x-12">
          <NavItem title="Meet The Team" url="/our-learning-center" />
          <NavItem title="Contact Us" url="/our-learning-center" />
          <NavItem title="Programs" url="/programs" />
          <NavItem title="Resources" url="/blog" />
        </div>
      </div>
    </nav>
  );
}
