export const formatPrice = (value) => {
  const n = Number(value);
  return `$${Number.isInteger(n) ? n : n.toFixed(2)}`;
};

// Se alguma imagem da pasta public não for encontrada, mostra um placeholder.
const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="292" height="321"><rect width="100%" height="100%" fill="#F5F5F5"/><text x="50%" y="50%" fill="#8F8F8F" font-family="Arial" font-size="14" text-anchor="middle">imagem não encontrada</text></svg>'
  );

export const handleImgError = (e) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = PLACEHOLDER;
};

export const toCssSize = (v) => (/^\d+$/.test(String(v)) ? `${v}px` : v);
