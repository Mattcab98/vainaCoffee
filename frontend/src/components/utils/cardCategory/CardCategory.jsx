import './cardCategory.css';

const CardCategory = ({ nameCategory, className, backgroundImage }) => {
  const styleBackground = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <button
      className={`card__category ${className || ''}`}
      style={styleBackground}
    >
      <div className="gradient__Txt">
        <h3>{nameCategory}</h3>
      </div>
    </button>
  );
};

export { CardCategory };
