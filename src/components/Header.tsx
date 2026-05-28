import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
 const logo = "https://res.cloudinary.com/dejzdypyf/image/upload/v1779468125/2nd_logo_xr6yh1.png"
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-20 bg-white backdrop-blur-sm shadow-2xl">
      <div className="container-narrow mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="KNL logo" width={130} height={50}/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors pb-1 ${
                  location.pathname === link.href
                    ? "text-primary border-b border-b-primary"
                    : "text-foreground hover:border-b hover:border-b-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="outline" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <AiOutlineClose className="w-6 h-6 text-foreground" />
            ) : (
              <RiMenu2Line className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-16 border-t border-border min-h-screen bg-background">
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xl font-medium transition-colors cursor-pointer flex gap-6 justify-center items-center ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  <IoIosArrowForward />
                </Link>
              ))}
              
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;