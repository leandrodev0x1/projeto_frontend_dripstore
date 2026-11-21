import { useState } from 'react';
import './style.css';

const ProductOptions = ({ options = [], radius = '4px', shape = 'square', type = 'text', onChange }) => {
  const [selected, setSelected] = useState(null);

  const select = (opt) => {
    setSelected(opt);
    if (onChange) onChange(opt);
  };

  return (
    <div className="product-options">
      {options.map((opt) => {
        const isColor = type === 'color';
        const style = {
          ...(shape === 'circle' ? { borderRadius: '50%' } : { borderRadius: radius }),
          ...(isColor ? { background: opt } : {}),
        };
        return (
          <button
            key={opt}
            type="button"
            className={`product-options__item product-options__item--${shape} ${selected === opt ? 'selected' : ''}`}
            style={style}
            onClick={() => select(opt)}
            aria-label={opt}
          >
            {!isColor && opt}
          </button>
        );
      })}
    </div>
  );
};

export default ProductOptions;
