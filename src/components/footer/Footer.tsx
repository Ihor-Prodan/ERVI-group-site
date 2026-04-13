import { Truck } from "lucide-react";
import "./Footer.css";

export const Footer = () => {
  const links = ["Služby", "O nás", "Recenzie", "Kontakt"];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__logo">
            <div className="footer__logoIcon">
              <Truck className="footer__logoIconSvg" />
            </div>

            <span className="footer__logoText">
              ERVI<span className="footer__logoTextAccent">GROUP</span>
            </span>
          </div>

          <div className="footer__nav">
            {links.map((link) => (
              <a key={link} href="#" className="footer__link">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copy">
            © {new Date().getFullYear()} ERVI-GROUP LOGISTICS /// VŠETKY PRÁVA
            VYHRADENÉ
          </div>

          <div className="footer__legal">
            <a href="#" className="footer__legalLink">
              Privacy Policy
            </a>
            <a href="#" className="footer__legalLink">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
