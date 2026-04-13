import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";
import { Marquee } from "../marque/Marquee";

export const Hero = () => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <section className="hero">
      <div className="hero__grid" />

      <div className="hero__container">
        <div className="hero__content">
          <motion.div
            className="hero__motion"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="hero__badge">
              <span className="hero__dot" />
              Logistika bez limitov
            </div>

            <h1 className="hero__title">
              Sila <br />
              <span className="hero__title--accent">Pohybu</span> <br />
              Dôvera
            </h1>

            <p className="hero__subtitle">
              ERVI-Group: Vaša cesta k úspechu začína u nás. Rýchlosť, ktorá
              definuje trh.
            </p>

            <div className="hero__actions">
              <button className="hero__btn hero__btn--primary">
                Naše Služby
              </button>

              <button className="hero__btn hero__btn--secondary">
                Kontakt
              </button>
            </div>
          </motion.div>
        </div>

        <div className="hero__visual">
          <motion.div className="hero__imageBox" style={{ y, rotate }}>
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
              alt="Truck"
              className="hero__image"
            />

            <div className="hero__tag">24/7</div>
          </motion.div>

          <div className="hero__bgText">ERVI</div>
        </div>
      </div>

      <div className="hero__marquee">
        <Marquee text="ERVI-GROUP LOGISTICS /// PREPRAVA TOVARU /// SŤAHOVANIE /// EXPRESNÉ DORUČENIE /// MEDZINÁRODNÁ DOPRAVA" />
      </div>
    </section>
  );
};
