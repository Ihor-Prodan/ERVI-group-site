import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "../header/SectionHeader";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="kontakt" className="contact">
      <div className="contact__container">
        <SectionHeader
          number="02"
          title="Kontakt"
          subtitle="Ozvite sa nám a vyriešime vašu logistiku ihneď"
        />

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__accent" />

            <h3 className="contact__title">
              Spojte sa <br /> s nami
            </h3>

            <div className="contact__list">
              <div className="contact__item">
                <div className="contact__icon">
                  <Phone className="contact__iconSvg" />
                </div>
                <div>
                  <div className="contact__label">Zavolajte nám</div>
                  <div className="contact__value">+421 900 000 000</div>
                </div>
              </div>

              <div className="contact__item">
                <div className="contact__icon">
                  <Mail className="contact__iconSvg" />
                </div>
                <div>
                  <div className="contact__label">Napíšte nám</div>
                  <div className="contact__value">info@ervi-group.sk</div>
                </div>
              </div>

              <div className="contact__item">
                <div className="contact__icon">
                  <MapPin className="contact__iconSvg" />
                </div>
                <div>
                  <div className="contact__label">Kde sme</div>
                  <div className="contact__value">Bratislava, SR</div>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              {["FB", "IG", "LI"].map((s) => (
                <a key={s} href="#" className="contact__social">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="contact__formBox">
            <form
              className="contact__form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__labelText">Vaše Meno</label>
                  <input
                    className="contact__input"
                    placeholder="MENO PRIEZVISKO"
                  />
                </div>

                <div className="contact__field">
                  <label className="contact__labelText">Váš Email</label>
                  <input
                    className="contact__input"
                    placeholder="EMAIL@ADRESA.SK"
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__labelText">Typ prepravy</label>
                <select className="contact__select">
                  <option>EXPRESNÁ PREPRAVA</option>
                  <option>MEDZINÁRODNÁ DOPRAVA</option>
                  <option>SŤAHOVANIE</option>
                </select>
              </div>

              <div className="contact__field">
                <label className="contact__labelText">Vaša Správa</label>
                <textarea
                  className="contact__textarea"
                  placeholder="AKO VÁM POMÔŽEME?"
                />
              </div>

              <button className="contact__btn">ODOSLAŤ DOPYT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
