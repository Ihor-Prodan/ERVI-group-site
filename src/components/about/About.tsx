import { motion } from "framer-motion";
import "./About.css";

export const About = () => {
  return (
    <section id="o-nas" className="about">
      <div className="about__container">
        <div className="about__grid">
          <motion.div
            className="about__media"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="about__imageBox">
              <img
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070&auto=format&fit=crop"
                alt="Warehouse"
                className="about__image"
              />
              <div className="about__overlay" />
            </div>

            <div className="about__stat about__stat--floating">
              <div className="about__stat-number">10+</div>
              <div className="about__stat-label">Rokov skúseností</div>
            </div>
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="about__title">
              Sme <span className="about__title--accent">ERVI</span>
            </h2>

            <p className="about__lead">
              Logistika nie je len o autách. Je o ľuďoch, ktorí držia slovo.
            </p>

            <p className="about__text">
              Sme dynamická spoločnosť, ktorá vznikla z vášne pre pohyb a
              efektivitu. Každý kilometer, ktorý prejdeme, je dôkazom našej
              oddanosti vašim cieľom.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-number">5000+</div>
                <div className="about__stat-label">Doručených zásielok</div>
              </div>

              <div className="about__stat">
                <div className="about__stat-number">100%</div>
                <div className="about__stat-label">Spokojnosť klientov</div>
              </div>
            </div>

            <button className="about__btn">Zistiť viac</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
