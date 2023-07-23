"use client";

import { Button, Navbar } from "flowbite-react";
import PlantulesLogoSVG from "../components/plantuleslogosvg";

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <div className="mx-3 h-10 w-10">
          <PlantulesLogoSVG />
        </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Les plantules
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Nous contacter</Navbar.Link>
        <Navbar.Link href="#">Qui sommes nous</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
