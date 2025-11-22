const SectionHeader = ({ title, subtitle, button = "", link = "" }) => {
  return (
    <div className="intro-excerpt">
        <h1>{title}</h1>
        {subtitle && <p className="mb-4">{subtitle}</p>}
        { button && <p><a href={link} className="btn btn-white-outline">{button}</a></p> }
    </div>
  );
};

export default SectionHeader;
