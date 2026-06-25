import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiEdit, FiMenu } from "react-icons/fi";
import "./Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("menu-lock");
      document.body.classList.add("menu-lock");
    } else {
      document.documentElement.classList.remove("menu-lock");
      document.body.classList.remove("menu-lock");
    }

    return () => {
      document.documentElement.classList.remove("menu-lock");
      document.body.classList.remove("menu-lock");
    };
  }, [menuOpen]);

  return (
    <header className={menuOpen ? "header menu-active" : "header"}>
      <div className="header-container">
        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FiMenu />
        </button>

        <div className="header-logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src="/images/manglam.png" alt="Manglam Logo" />
          </NavLink>
        </div>

        <nav className={menuOpen ? "header-nav active" : "header-nav"}>
          <ul>
            <li>
              <NavLink to="/about-manglam" onClick={closeMenu}>
                About Manglam
              </NavLink>
            </li>

            <li>
              <NavLink to="/our-projects" onClick={closeMenu}>
                Our Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/business-verticals" onClick={closeMenu}>
                Business Verticals
              </NavLink>
            </li>

            <li className="mobile-menu-item">
              <NavLink to="/enquire" onClick={closeMenu}>
                Enquire
              </NavLink>
            </li>

            <li className="mobile-menu-item">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                WhatsApp
              </a>
            </li>

            <li className="mobile-menu-item">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Instagram
              </a>
            </li>

            <li className="mobile-menu-item">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Facebook
              </a>
            </li>

            <li className="mobile-menu-item">
              <a href="tel:+919999999999" onClick={closeMenu}>
                Call
              </a>
            </li>
          </ul>
        </nav>

        <NavLink
          to="/enquire"
          className="responsive-enquire-btn"
          onClick={closeMenu}
        >
          <FiEdit />
          <span>Enquire</span>
        </NavLink>

        <div className="header-actions">
          <NavLink to="/enquire" className="enquire-btn" onClick={closeMenu}>
            <FiEdit />
            <span>Enquire</span>
          </NavLink>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a href="tel:+919999999999" className="icon-btn" aria-label="Call">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </header>
  );
};