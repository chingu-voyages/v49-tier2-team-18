import { navbarLinks } from "../../constants/Navbar";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

// Import CSS file
import "./Navbar.css";

// Import Logo and Icons
import Logo from "./Logo";
import { FiMenu, FiArrowRight } from "react-icons/fi";

// Import React hooks
import { useEffect, useState } from "react";

// Import animation variants
import {
  menuLinkArrowVariants,
  menuLinkVariants,
  menuVariants,
} from "../../lib/utils";

// Define Navbar component
const Navbar = () => {
  // State for managing the open/close state of the menu
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10 ? true : false);
  });

  // Effect for handling window resize
  useEffect(() => {
    const handleResize = () => {
      // Close the menu if the window width is less than 760px
      if (window.innerWidth < 760) {
        setIsOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Render the Navbar
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <motion.button
          className="menu-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FiMenu />
        </motion.button>

        <Logo />

        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="nav-menu"
          >
            {navbarLinks.map((item) => (
              <ScrollLink
                variants={menuLinkVariants}
                to={item.path}
                smooth={true}
                offset={-100}
                key={item.label}
                rel="nofollow"
                className="menu-link"
              >
                <motion.span variants={menuLinkArrowVariants}>
                  <FiArrowRight className="menu-link-arrow" />
                </motion.span>
                <motion.div
                  key={item.label}
                  whileHover={{ y: -30, transition: { duration: 0.5 } }}
                >
                  <span className="menu-link-text">{item.label}</span>
                  <span className="menu-link-text-active">{item.label}</span>
                </motion.div>
              </ScrollLink>
            ))}
          </motion.div>
        )}

        {navbarLinks.map((item) => (
          <ScrollLink
            to={item.path}
            key={item.label}
            smooth={true}
            offset={-100}
            rel="nofollow"
            className="nav-link"
          >
            <motion.div
              key={item.label}
              whileHover={{ y: -30, transition: { duration: 0.5 } }}
            >
              <span className="menu-link-text">{item.label}</span>
              <span className="menu-link-text-active">{item.label}</span>
            </motion.div>
          </ScrollLink>
        ))}
      </div>

      <div className="nav-right">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="signIn-button"
        >
          Sign-In
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="signUp-button"
        >
          Sign-Up
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
