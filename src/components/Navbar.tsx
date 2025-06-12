import { useState } from 'react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline/index.js';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Categorias', href: '/categorias' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscar:', searchQuery);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-2">
      {/* Navbar Container */}
      <div className="mx-auto sm:px-2 lg:px-4 max-w-7xl">
        {/* Navbar */}
        <div className="relative bg-dark/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-primary/20 rounded-2xl">
          <nav className="flex items-center justify-between h-14 sm:h-16 px-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-2">
                <img 
                  src="https://i.postimg.cc/mDg0WCRq/Logo-Sem-Nome.png" 
                  alt="Logo All Shop" 
                  className="h-6 w-auto sm:h-7"
                />
                <span className="text-sm sm:text-base font-semibold text-primary">
                  ALL SHOP
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:block flex-1 max-w-xs lg:max-w-sm mx-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar produtos..."
                  className="w-full h-8 pl-3 pr-8 text-sm bg-dark/50 border border-primary/30 rounded-full focus:outline-none focus:border-primary text-white placeholder:text-primary/70"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-primary/70 hover:text-primary"
                >
                  <MagnifyingGlassIcon className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-primary p-1.5 hover:bg-primary/10 rounded-lg"
              >
                <span className="sr-only">Abrir menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-dark shadow-[0_4px_20px_rgb(0,0,0,0.15)] border border-primary/20 rounded-xl overflow-hidden mx-2">
              {/* Mobile Search */}
              <div className="p-3 border-b border-primary/20">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar produtos..."
                    className="w-full h-8 pl-3 pr-8 text-sm bg-dark/50 border border-primary/30 rounded-full focus:outline-none focus:border-primary text-white placeholder:text-primary/70"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-primary/70 hover:text-primary"
                  >
                    <MagnifyingGlassIcon className="h-4 w-4" />
                  </button>
                </form>
              </div>
              {/* Mobile Navigation */}
              <div className="py-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white hover:bg-primary/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 