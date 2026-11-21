import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import FilterGroup from '../../components/FilterGroup';
import { products } from '../../data/products';
import './style.css';

const groups = [
  { key: 'brand', title: 'Marca', inputType: 'checkbox', options: [{ text: 'Adidas' }, { text: 'K-Swiss' }, { text: 'Nike' }, { text: 'Puma' }] },
  { key: 'category', title: 'Categoria', inputType: 'checkbox', options: [{ text: 'Esporte e lazer' }, { text: 'Casual' }, { text: 'Utilitário' }, { text: 'Corrida' }] },
  { key: 'gender', title: 'Gênero', inputType: 'checkbox', options: [{ text: 'Masculino' }, { text: 'Feminino' }, { text: 'Unisex' }] },
  { key: 'state', title: 'Estado', inputType: 'radio', options: [{ text: 'Novo' }, { text: 'Usado' }] },
];

const ProductListingPage = () => {
  const [params] = useSearchParams();
  const term = (params.get('filter') || '').toLowerCase();
  const [sort, setSort] = useState('');
  const [filters, setFilters] = useState({ brand: [], category: [], gender: [], state: [] });

  const onChange = (key, type) => (value, checked) =>
    setFilters((prev) => ({
      ...prev,
      [key]:
        type === 'radio'
          ? [value]
          : checked
          ? [...prev[key], value]
          : prev[key].filter((v) => v !== value),
    }));

  const result = useMemo(() => {
    let list = products.filter(
      (p) =>
        (!term || `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(term)) &&
        Object.entries(filters).every(([k, vals]) => !vals.length || vals.includes(p[k]))
    );
    const final = (p) => p.priceDiscount ?? p.price;
    if (sort === 'asc') list = [...list].sort((a, b) => final(a) - final(b));
    if (sort === 'desc') list = [...list].sort((a, b) => final(b) - final(a));
    return list;
  }, [term, filters, sort]);

  return (
    <Layout>
      <div className="container listing-page">
        <aside className="listing-page__sidebar">
          <label className="listing-page__sort">
            <span>Ordenar por</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">Mais relevantes</option>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </label>

          <div className="listing-page__filters">
            <h3>Filtrar por</h3>
            <hr />
            {groups.map((g) => (
              <FilterGroup
                key={g.key}
                title={g.title}
                inputType={g.inputType}
                options={g.options}
                selected={filters[g.key]}
                onChange={onChange(g.key, g.inputType)}
              />
            ))}
          </div>
        </aside>

        <div className="listing-page__content">
          <Section title={`${result.length} produtos encontrados`} titleAlign="left">
            <ProductListing products={result} columns={3} />
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
