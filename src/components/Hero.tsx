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
    <div className="relative bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        <div className="relative z-10 pb-8 bg-dark w-full lg:w-1/2 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 flex flex-col justify-center">
          <main className="mt-10 mx-auto max-w-2xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-0 xl:mt-0 w-full">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img src="/src/assets/logo.png" alt="Logo All Shop" className="h-20 w-auto mb-4" />
              <h1 className="font-zing text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                <span className="block xl:inline">Bem-vindo ao</span>{' '}
                <span className="block text-primary xl:inline font-zing">AllShop</span>
              </h1>
              <p className="mt-3 text-base text-primary sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0 font-zing">
                Descubra nossa seleção exclusiva de produtos de alta qualidade. 
                Encontre tudo o que você precisa em um só lugar.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start w-full gap-3">
                <a
                  href="/produtos"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dark bg-primary hover:bg-white hover:text-primary md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Ver Produtos
                </a>
                <a
                  href="/categorias"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-primary text-primary bg-dark hover:bg-primary hover:text-dark md:py-4 md:text-lg md:px-10 rounded-md transition-colors duration-200"
                >
                  Explorar Categorias
                </a>
              </div>
              {/* Quick Categories */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {quickCategories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="group relative rounded-lg border border-primary p-4 hover:bg-primary hover:text-dark hover:shadow-md transition-all duration-200 bg-dark text-white flex items-center"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <category.icon className="h-6 w-6 text-primary group-hover:text-dark" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white group-hover:text-dark">
                        {category.name}
                      </h3>
                      <p className="text-xs text-primary group-hover:text-dark">{category.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 