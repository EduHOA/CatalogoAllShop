import { DevicePhoneMobileIcon, ComputerDesktopIcon, HeartIcon } from '@heroicons/react/24/outline/index.js';

const quickCategories = [
  {
    name: 'Eletrônicos',
    icon: DevicePhoneMobileIcon,
    href: '/categorias/eletronicos',
    description: 'Smartphones, tablets e mais'
  },
  {
    name: 'Computadores',
    icon: ComputerDesktopIcon,
    href: '/categorias/computadores',
    description: 'Notebooks, desktops e acessórios'
  },
  {
    name: 'Ofertas',
    icon: HeartIcon,
    href: '/ofertas',
    description: 'Produtos em promoção'
  }
];

export default function Hero() {
  return (
    <div className="relative bg-dark py-16 sm:py-24">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center w-full">
            <img 
              src="https://i.postimg.cc/9FbgCzgH/Logo-com-Nome.png" 
              alt="Logo All Shop Centro" 
              className="h-56 sm:h-64 md:h-72 w-auto mx-auto mb-8" 
            />
          </div>
          <h1 className="font-zing text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            <span className="block xl:inline">Bem-vindo ao</span>{' '}
            <span className="block text-primary xl:inline font-zing">AllShop</span>
          </h1>
          <p className="mt-6 text-base text-primary sm:text-lg md:text-xl font-zing max-w-2xl mx-auto">
            Descubra nossa seleção exclusiva de produtos de alta qualidade. 
            Encontre tudo o que você precisa em um só lugar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/produtos"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-dark bg-primary hover:bg-white hover:text-primary md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Ver Produtos
            </a>
            <a
              href="/categorias"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-primary text-primary bg-dark hover:bg-primary hover:text-dark md:py-4 md:text-lg md:px-10 rounded-xl transition-colors duration-200"
            >
              Explorar Categorias
            </a>
          </div>
        </div>

        {/* Quick Categories */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 sm:px-6">
          {quickCategories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative rounded-xl border border-primary p-6 hover:bg-primary hover:text-dark hover:shadow-md transition-all duration-200 bg-dark text-white flex items-center"
            >
              <div className="flex-shrink-0 mr-4">
                <category.icon className="h-8 w-8 text-primary group-hover:text-dark" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white group-hover:text-dark">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-primary group-hover:text-dark">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 