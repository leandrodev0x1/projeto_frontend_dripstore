import './style.css';

// `selected`/`onChange` são opcionais: permitem controlar o grupo a partir da página.
const FilterGroup = ({ title, inputType = 'checkbox', options = [], selected = [], onChange }) => {
  const name = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="filter-group">
      <h4>{title}</h4>
      {options.map((opt) => {
        const value = opt.value ?? opt.text;
        return (
          <label key={opt.text}>
            <input
              type={inputType}
              name={name}
              value={value}
              checked={selected.includes(value)}
              onChange={(e) => onChange && onChange(value, e.target.checked)}
            />
            {opt.text}
          </label>
        );
      })}
    </div>
  );
};

export default FilterGroup;
