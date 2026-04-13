import { useEffect, useState } from "react";
import "./Navbar.css";
import { Truck } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Služby", "O nás", "Recenzie", "Kontakt"];

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <div className="navbar__logo-icon">
            <Truck className="navbar__logo-icon-svg" />
          </div>

          <span className="navbar__logo-text">
            ERVI<span>GROUP</span>
          </span>
        </div>

        <div className="navbar__menu">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="navbar__link"
            >
              {item}
            </a>
          ))}

          <button className="navbar__cta">Získať ponuku</button>
        </div>

        <button className="navbar__burger" onClick={() => setIsOpen(true)}>
          ☰
        </button>

        <div
          className={`navbar__mobile ${isOpen ? "navbar__mobile--open" : ""}`}
        >
          <div className="navbar__mobile-header">
            MENU
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="navbar__mobile-links">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="navbar__mobile-footer">
            <div className="navbar__phone">📞 +421 900 000 000</div>

            <button className="navbar__cta navbar__cta--big">
              Zavolať teraz
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
