import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
//import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  return (
    <Navbar className="bg-accent-1 text-foreground fixed top-0 w-full z-50 container mx-auto align-middle">
      <NavbarBrand>
        <p className="font-bold text-inherit"></p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="../img/">
            Images
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="./" aria-current="page">
            Videos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">

          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#"></Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}