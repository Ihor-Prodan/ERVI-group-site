import "./SectionHeader.css";

interface Props {
  number: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ number = "5", title, subtitle }: Props) => {
  return (
    <div className="section-header">
      <div className="section-header__top">
        <span className="section-header__number">{number}</span>
        <div className="section-header__line" />
      </div>

      <div className="section-header__bottom">
        <h2 className="section-header__title">{title}</h2>

        {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};
