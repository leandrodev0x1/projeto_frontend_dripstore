import { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { handleImgError, toCssSize } from '../../utils/format';
import './style.css';

const Gallery = ({ className = '', width, height, radius, showThumbs, images = [] }) => {
  const [current, setCurrent] = useState(0);
  const last = images.length - 1;

  return (
    <div className={`gallery ${className}`} style={{ width: toCssSize(width) }}>
      <div
        className="gallery__slide"
        style={{ height: toCssSize(height), borderRadius: radius }}
      >
        <div
          className="gallery__track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, i) => (
            <img key={i} src={img.src} alt={`Imagem ${i + 1}`} onError={handleImgError} />
          ))}
        </div>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--left"
          aria-label="Imagem anterior"
          disabled={current === 0}
          onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
        >
          <img src={arrowLeft} alt="" />
        </button>
        <button
          type="button"
          className="gallery__arrow gallery__arrow--right"
          aria-label="Próxima imagem"
          disabled={current === last}
          onClick={() => setCurrent((c) => Math.min(c + 1, last))}
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              className={`gallery__thumb ${i === current ? 'selected' : ''}`}
              style={{ borderRadius: radius }}
              onClick={() => setCurrent(i)}
            >
              <img src={img.src} alt={`Miniatura ${i + 1}`} onError={handleImgError} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
