import { useState } from 'react';
import { FunnelIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline/index.js';

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: 'Produto Premium 1',
    price: 'R$ 299,90',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Eletrônicos',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Produto Premium 2',
    price: 'R$ 199,90',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80',
    category: 'Acessórios',
    rating: 4.2,
    reviews: 85
  },
  {
    id: 3,
    name: 'Produto Premium 3',
    price: 'R$ 399,90',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    category: 'Eletrônicos',
    rating: 4.8,
    reviews: 256
  },
  {
    id: 4,
    name: 'Produto Premium 4',
    price: 'R$ 159,90',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Acessórios',
    rating: 4.0,
    reviews: 64
  }
];

const categories = ['Todos', 'Eletrônicos', 'Acessórios'];
const sortOptions = [
  { name: 'Mais Relevantes', value: 'relevant' },
  { name: 'Menor Preço', value: 'price_asc' },
  { name: 'Maior Preço', value: 'price_desc' },
  { name: 'Mais Avaliados', value: 'rating' }
];

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('relevant');

  const filteredProducts = featuredProducts
    .filter(product => selectedCategory === 'Todos' || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price_asc':
          return parseFloat(a.price.replace('R$ ', '').replace(',', '.')) - 
                 parseFloat(b.price.replace('R$ ', '').replace(',', '.'));
        case 'price_desc':
          return parseFloat(b.price.replace('R$ ', '').replace(',', '.')) - 
                 parseFloat(a.price.replace('R$ ', '').replace(',', '.'));
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <div className="bg-dark">
      <div className="container mx-auto py-8 px-2 sm:py-12 sm:px-4 md:py-16 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-zing text-2xl font-extrabold tracking-tight text-primary sm:text-3xl md:text-4xl">
            Produtos em Destaque
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-white sm:mt-4 sm:text-lg md:mt-5 md:text-xl font-zing">
            Confira nossa seleção especial de produtos mais populares
          </p>
        </div>
        {/* Filters and Sort */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <FunnelIcon className="h-5 w-5 text-primary" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-dark'
                      : 'bg-dark text-white border border-primary hover:bg-primary hover:text-dark'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {/* Sort Options */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <ArrowsUpDownIcon className="h-5 w-5 text-primary" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full md:w-auto pl-3 pr-10 py-2 text-base border-primary focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-dark text-white"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value} className="text-dark">
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-8 grid gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative bg-dark rounded-lg shadow-sm hover:shadow-lg border border-primary transition-shadow duration-200 flex flex-col">
              <div className="relative w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 bg-primary rounded-t-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-90 transition-opacity duration-200"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-200" />
                {product.rating >= 4.5 && (
                  <div className="absolute top-2 right-2 bg-primary text-dark text-xs font-bold px-2 py-1 rounded-full">
                    Destaque
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-zing text-sm sm:text-base font-medium text-white">
                  <a href={`/produto/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-primary">{product.category}</p>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-primary'
                            : 'text-white opacity-30'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-primary">({product.reviews})</span>
                  </div>
                </div>
                <p className="mt-2 text-sm sm:text-base font-semibold text-primary font-zing">{product.price}</p>
                <a
                  href={`/produto/${product.id}`}
                  className="inline-flex items-center px-4 py-2 border border-primary text-dark bg-primary hover:bg-white hover:text-primary text-sm font-zing font-medium rounded-md transition-colors duration-200 mt-2 w-full sm:w-auto justify-center"
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/produtos"
            className="inline-flex items-center px-6 py-3 border border-primary text-dark bg-primary hover:bg-white hover:text-primary text-base font-zing font-medium rounded-md shadow-sm transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </div>
  );
} 