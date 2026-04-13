import { motion } from "framer-motion";
import "./Services.css";
import { SectionHeader } from "../header/SectionHeader";
import { Clock, Globe, ShieldCheck, Truck } from "lucide-react";

interface Service {
  title: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
}

export const Services = () => {
  const services: Service[] = [
    {
      title: "Expresná preprava",
      desc: "Doručenie v rámci EÚ do 24-48 hodín. Čas sú peniaze, my ich šetríme.",
      icon: <Clock className="w-16 h-16" />,
      tag: "TOP RÝCHLOSŤ",
    },
    {
      title: "Medzinárodná doprava",
      desc: "Pravidelné linky po celej Európe. Žiadne hranice, len cesty.",
      icon: <Globe className="w-16 h-16" />,
      tag: "CELÁ EÚ",
    },
    {
      title: "Sťahovanie",
      desc: "Profesionálne sťahovanie firiem a bytov. Bezpečne a bez stresu.",
      icon: <Truck className="w-16 h-16" />,
      tag: "PROFI PRÍSTUP",
    },
    {
      title: "Bezpečnosť",
      desc: "Váš tovar je poistený a sledovaný 24/7 cez najmodernejšie GPS.",
      icon: <ShieldCheck className="w-16 h-16" />,
      tag: "100% GARANCIA",
    },
  ];

  return (
    <section id="sluzby" className="services">
      <div className="services__container">
        <SectionHeader
          number="01"
          title="Služby"
          subtitle="Kompletné logistické riešenia pre váš biznis"
        />

        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="services__card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="services__card-bg" />

              <div className="services__card-inner">
                <div className="services__icon">{service.icon}</div>

                <span className="services__tag">{service.tag}</span>

                <h3 className="services__title">{service.title}</h3>

                <p className="services__desc">{service.desc}</p>

                <div className="services__footer">
                  <button className="services__btn">Viac info →</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
