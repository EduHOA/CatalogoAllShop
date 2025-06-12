import { useState, useRef } from 'react';
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  HomeIcon,
  CubeIcon,
  ArrowRightOnRectangleIcon,
  UsersIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

// Mock data for products
const initialProducts = [
  {
    id: 1,
    name: 'Produto Premium 1',
    price: 299.90,
    category: 'Eletrônicos',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
  {
    id: 2,
    name: 'Produto Premium 2',
    price: 199.90,
    category: 'Acessórios',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  },
  {
    id: 3,
    name: 'Produto Premium 3',
    price: 399.90,
    category: 'Eletrônicos',
    stock: 10,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
  },
];

const categories = ['Todos', 'Eletrônicos', 'Acessórios'];

// Mock stats
const stats = [
  {
    name: 'Produtos',
    value: initialProducts.length,
    icon: CubeIcon,
    color: 'bg-primary/20 text-primary',
  },
  {
    name: 'Pedidos',
    value: 12,
    icon: ShoppingBagIcon,
    color: 'bg-blue-500/20 text-blue-400',
  },
  {
    name: 'Usuários',
    value: 5,
    icon: UsersIcon,
    color: 'bg-green-500/20 text-green-400',
  },
  {
    name: 'Estatísticas',
    value: '100%',
    icon: ChartBarIcon,
    color: 'bg-yellow-400/20 text-yellow-400',
  },
];

// Mock chart component
function MockCharts() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center animate-gradient-x bg-gradient-to-br from-dark via-black to-primary/20">
      {/* Header do dashboard */}
      <div className="w-full flex flex-col items-center mb-8">
        <img src="/src/assets/logo.png" alt="AllShop Logo" className="h-24 w-auto mb-4 drop-shadow-[0_4px_24px_rgba(160,204,31,0.25)]" />
        <h1 className="text-3xl sm:text-4xl font-zing font-extrabold text-primary drop-shadow mb-1">Painel Administrativo</h1>
        <span className="text-base text-primary/80 font-zing mb-2">Bem-vindo! Veja o resumo do seu e-commerce abaixo.</span>
        <div className="w-full max-w-2xl border-b border-primary/10 mt-2" />
      </div>
      {/* Cards de estatísticas */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4 px-2 sm:px-8">
        {/* Card 1 */}
        <div className="glass-card group relative flex flex-col items-center shadow-2xl border border-primary/30 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/30 focus-within:ring-2 focus-within:ring-primary outline-none cursor-pointer overflow-hidden" tabIndex={0} aria-label="Vendas Mensais" title="Vendas Mensais">
          <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-primary group-focus:border-primary rounded-2xl transition-all duration-300 animate-border-glow" />
          <div className="relative mb-2">
            <ChartBarIcon className="h-10 w-10 text-primary drop-shadow" aria-label="Ícone de gráfico de barras" />
            <span className="absolute -top-2 -right-2 bg-primary text-dark text-xs font-bold px-2 py-0.5 rounded-full shadow" title="Crescimento mensal">+12%</span>
          </div>
          <div className="text-lg text-white font-zing font-semibold mb-1 tracking-wide">Vendas Mensais</div>
          {/* Fake bar chart */}
          <div className="w-full h-32 flex items-end gap-1 mt-4" aria-label="Gráfico de barras de vendas">
            {[40, 60, 80, 30, 90, 70, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/40 rounded-t-lg transition-all duration-300 group-hover:bg-primary/70" style={{height: `${h}%`}} />
            ))}
          </div>
          <span className="text-xs text-gray-400 mt-4">Comparado ao mês anterior</span>
        </div>
        {/* Card 2 */}
        <div className="glass-card group relative flex flex-col items-center shadow-2xl border border-green-400/30 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-green-400/30 focus-within:ring-2 focus-within:ring-green-400 outline-none cursor-pointer overflow-hidden" tabIndex={0} aria-label="Novos Usuários" title="Novos Usuários">
          <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-green-400 group-focus:border-green-400 rounded-2xl transition-all duration-300 animate-border-glow" />
          <div className="relative mb-2">
            <UsersIcon className="h-10 w-10 text-green-400 drop-shadow" aria-label="Ícone de usuários" />
            <span className="absolute -top-2 -right-2 bg-green-400 text-dark text-xs font-bold px-2 py-0.5 rounded-full shadow" title="Novos usuários">+5</span>
          </div>
          <div className="text-lg text-white font-zing font-semibold mb-1 tracking-wide">Novos Usuários</div>
          {/* Fake line chart */}
          <svg viewBox="0 0 100 32" className="w-full h-32 mt-4" aria-label="Gráfico de linha de novos usuários">
            <polyline fill="none" stroke="#4ade80" strokeWidth="3" points="0,30 10,25 20,28 30,20 40,15 50,18 60,10 70,12 80,8 90,15 100,5" />
            <circle cx="100" cy="5" r="3" fill="#4ade80" />
          </svg>
          <span className="text-xs text-gray-400 mt-4">Últimos 30 dias</span>
        </div>
      </div>
      {/* Dica contextual */}
      <div className="w-full border-t border-primary/10 mt-12 pt-8 flex flex-col items-center">
        <span className="text-xs text-primary/70 font-zing tracking-widest uppercase">Atualizado em tempo real</span>
        <span className="text-xs text-gray-500 mt-2">Passe o mouse ou toque nos cards para mais detalhes</span>
      </div>
    </div>
  );
}

// Product Registration Screen
function ProductRegistration({ onBack }: { onBack: () => void }) {
  const [images, setImages] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFiles(files: FileList | null) {
    if (!files) return;
    const fileArr = Array.from(files).slice(0, 5 - images.length);
    setImages((prev) => [...prev, ...fileArr].slice(0, 5));
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(false);
  }

  function handleImageRemove(idx: number) {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  }

  // Drag-and-drop reordering
  function handleDragStart(idx: number) {
    setDraggedIdx(idx);
  }

  function handleDragEnd() {
    setDraggedIdx(null);
  }

  function handleDragEnter(idx: number) {
    if (draggedIdx === null || draggedIdx === idx) return;
    setImages((prev) => {
      const newArr = [...prev];
      const [removed] = newArr.splice(draggedIdx, 1);
      newArr.splice(idx, 0, removed);
      return newArr;
    });
    setDraggedIdx(idx);
  }

  return (
    <div className="w-full h-full min-h-[80vh] grid place-items-center py-8 bg-gradient-to-br from-dark via-black to-primary/20 animate-gradient-x">
      <div className="w-full glass-card relative border border-primary/30 shadow-2xl p-4 sm:p-8 transition-all duration-300 hover:shadow-primary/30 focus-within:ring-2 focus-within:ring-primary outline-none cursor-pointer overflow-hidden max-w-3xl">
        <div className="absolute inset-0 pointer-events-none border-2 border-transparent focus-within:border-primary rounded-2xl transition-all duration-300 animate-border-glow" />
        <h2 className="text-3xl font-zing font-extrabold text-primary mb-2 text-center drop-shadow">Cadastro de Produto</h2>
        <span className="block text-base text-primary/80 font-zing mb-6 text-center">Preencha os dados do novo produto abaixo.</span>
        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sku" className="block text-sm font-zing font-medium text-white mb-1">SKU</label>
              <input type="text" id="sku" className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-lg text-white placeholder-primary/50 focus:outline-none focus:border-primary font-zing transition-all duration-200" placeholder="SKU do produto" />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-zing font-medium text-white mb-1">Nome do Produto</label>
              <input type="text" id="name" className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-lg text-white placeholder-primary/50 focus:outline-none focus:border-primary font-zing transition-all duration-200" placeholder="Digite o nome do produto" />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-zing font-medium text-white mb-1">Descrição</label>
            <textarea id="description" rows={3} className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-lg text-white placeholder-primary/50 focus:outline-none focus:border-primary font-zing resize-none transition-all duration-200" placeholder="Descrição detalhada do produto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-zing font-medium text-white mb-1">Categoria</label>
              <select id="category" className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary font-zing transition-all duration-200">
                <option value="Eletrônicos">Eletrônicos</option>
                <option value="Acessórios">Acessórios</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="price" className="block text-sm font-zing font-medium text-white mb-1">Preço</label>
                <input type="number" id="price" step="0.01" className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-lg text-white placeholder-primary/50 focus:outline-none focus:border-primary font-zing transition-all duration-200" placeholder="0.00" />
              </div>
              <div>
                <label htmlFor="stock" className="block text-sm font-zing font-medium text-white mb-1">Estoque</label>
                <input type="number" id="stock" className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-lg text-white placeholder-primary/50 focus:outline-none focus:border-primary font-zing transition-all duration-200" placeholder="0" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-zing font-medium text-white mb-1">Fotos do Produto (até 5)</label>
            <div
              className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors ${dragActive ? 'border-primary bg-primary/10' : 'border-primary/30 bg-black/40'}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => inputRef.current?.click()}
              tabIndex={0}
              aria-label="Área de upload de fotos"
              title="Arraste até 5 imagens ou clique para selecionar"
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={e => handleFiles(e.target.files)}
                disabled={images.length >= 5}
              />
              <span className="text-primary font-zing mb-2">Arraste até 5 imagens aqui ou clique para selecionar</span>
              <span className="text-xs text-gray-400">Formatos aceitos: JPG, PNG, WEBP</span>
              {images.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4 justify-center">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative group ${idx === 0 ? 'ring-2 ring-primary' : ''}`}
                      draggable
                      onDragStart={() => handleDragStart(idx)}
                      onDragEnd={handleDragEnd}
                      onDragEnter={() => handleDragEnter(idx)}
                      title={idx === 0 ? 'Foto principal' : 'Arraste para reordenar'}
                      tabIndex={0}
                      aria-label={idx === 0 ? 'Foto principal' : `Foto ${idx + 1}`}
                    >
                      <img src={URL.createObjectURL(img)} alt="preview" className="h-20 w-20 object-cover rounded-lg border border-primary/30" />
                      {idx === 0 && (
                        <span className="absolute top-1 left-1 bg-primary text-dark text-xs font-bold px-2 py-0.5 rounded shadow">Principal</span>
                      )}
                      <button type="button" onClick={e => { e.stopPropagation(); handleImageRemove(idx); }} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow hover:bg-red-600" aria-label="Remover imagem">×</button>
                      <span className="absolute bottom-1 left-1 text-[10px] text-white bg-black/60 rounded px-1 pointer-events-none select-none">{idx + 1}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="text-xs text-gray-400 mt-2 text-center">Arraste as miniaturas para escolher a ordem. A primeira é a principal.</div>
            )}
          </div>
          <div className="flex justify-between gap-3 mt-8">
            <button type="button" onClick={onBack} className="px-5 py-2 border border-primary/30 text-white rounded-lg hover:bg-primary hover:text-dark font-zing font-semibold transition-all duration-200 focus:ring-2 focus:ring-primary focus:outline-none" aria-label="Voltar">Voltar</button>
            <button type="submit" className="px-5 py-2 bg-primary text-dark rounded-lg hover:bg-white hover:text-primary font-zing font-semibold transition-all duration-200 focus:ring-2 focus:ring-primary focus:outline-none relative overflow-hidden group" aria-label="Cadastrar produto">
              <span className="group-hover:opacity-70 transition-opacity duration-200">Cadastrar</span>
              {/* Ripple effect */}
              <span className="absolute inset-0 pointer-events-none group-active:animate-ping bg-primary/30 rounded-lg opacity-0 group-active:opacity-100 transition-all duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Tela de cadastro de categorias
function CategoryRegistration({ onBack }: { onBack: () => void }) {
  return (
    <div className="w-full h-full min-h-[80vh] grid place-items-center py-8 bg-gradient-to-br from-dark via-black to-primary/20 animate-gradient-x">
      <div className="w-full glass-card relative border border-primary/30 shadow-2xl p-4 sm:p-8 transition-all duration-300 hover:shadow-primary/30 focus-within:ring-2 focus-within:ring-primary outline-none cursor-pointer overflow-hidden max-w-2xl">
        <div className="absolute inset-0 pointer-events-none border-2 border-transparent focus-within:border-primary rounded-2xl transition-all duration-300 animate-border-glow" />
        <h2 className="text-3xl font-zing font-extrabold text-primary mb-2 text-center drop-shadow flex items-center justify-center gap-2">
          <TagIcon className="h-8 w-8 text-primary" /> Cadastro de Categoria
        </h2>
        <span className="block text-base text-primary/80 font-zing mb-6 text-center">Adicione uma nova categoria para seus produtos.</span>
        <form className="space-y-5">
          <div>
            <label htmlFor="category-name" className="block text-sm font-zing font-medium text-white mb-1">Nome da Categoria</label>
            <input type="text" id="category-name" className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-lg text-white placeholder-primary/50 focus:outline-none focus:border-primary font-zing transition-all duration-200" placeholder="Ex: Eletrônicos" />
          </div>
          <div>
            <label htmlFor="category-desc" className="block text-sm font-zing font-medium text-white mb-1">Descrição</label>
            <textarea id="category-desc" rows={2} className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-lg text-white placeholder-primary/50 focus:outline-none focus:border-primary font-zing resize-none transition-all duration-200" placeholder="Descrição da categoria" />
          </div>
          <div>
            <label htmlFor="category-color" className="block text-sm font-zing font-medium text-white mb-1">Cor</label>
            <input type="color" id="category-color" className="w-12 h-8 p-0 border-2 border-primary/30 rounded-lg bg-black/40 cursor-pointer" defaultValue="#a0cc1f" />
          </div>
          <div className="flex justify-between gap-3 mt-8">
            <button type="button" onClick={onBack} className="px-5 py-2 border border-primary/30 text-white rounded-lg hover:bg-primary hover:text-dark font-zing font-semibold transition-all duration-200 focus:ring-2 focus:ring-primary focus:outline-none" aria-label="Voltar">Voltar</button>
            <button type="submit" className="px-5 py-2 bg-primary text-dark rounded-lg hover:bg-white hover:text-primary font-zing font-semibold transition-all duration-200 focus:ring-2 focus:ring-primary focus:outline-none relative overflow-hidden group" aria-label="Cadastrar categoria">
              <span className="group-hover:opacity-70 transition-opacity duration-200">Cadastrar</span>
              <span className="absolute inset-0 pointer-events-none group-active:animate-ping bg-primary/30 rounded-lg opacity-0 group-active:opacity-100 transition-all duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [activeScreen, setActiveScreen] = useState<'dashboard' | 'cadastro-produto' | 'cadastro-categoria'>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-screen min-h-screen flex bg-gradient-to-br from-dark via-black to-primary/10 overflow-x-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-black/90 border-r border-primary/20 shadow-lg min-h-screen fixed left-0 top-0 z-30">
        <div className="flex items-center gap-3 px-8 py-6 border-b border-primary/10">
          <img src="/src/assets/logo.png" alt="AllShop Admin" className="h-10 w-10 rounded-full bg-primary/10 p-1" />
          <span className="text-xl font-zing font-bold text-primary">AllShop</span>
        </div>
        <nav className="flex-1 px-4 py-8 flex flex-col gap-2">
          <button onClick={() => setActiveScreen('dashboard')} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-zing font-medium transition-colors ${activeScreen === 'dashboard' ? '!bg-primary/10 !text-primary' : 'bg-transparent text-white hover:bg-primary/10'}`}> <HomeIcon className="h-5 w-5 text-primary" /> Dashboard </button>
          <button onClick={() => setActiveScreen('cadastro-produto')} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-zing font-medium transition-colors ${activeScreen === 'cadastro-produto' ? '!bg-primary/10 !text-primary' : 'bg-transparent text-white hover:bg-primary/10'}`}> <CubeIcon className="h-5 w-5 text-primary" /> Produtos </button>
          <button onClick={() => setActiveScreen('cadastro-categoria')} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-zing font-medium transition-colors ${activeScreen === 'cadastro-categoria' ? '!bg-primary/10 !text-primary' : 'bg-transparent text-white hover:bg-primary/10'}`}> <TagIcon className="h-5 w-5 text-primary" /> Categorias </button>
          <a href="#pedidos" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white font-zing font-medium bg-transparent hover:bg-blue-500/10 transition-colors"> <ShoppingBagIcon className="h-5 w-5 text-blue-400" /> Pedidos </a>
          <a href="#usuarios" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white font-zing font-medium bg-transparent hover:bg-green-500/10 transition-colors"> <UsersIcon className="h-5 w-5 text-green-400" /> Usuários </a>
          <a href="#estatisticas" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white font-zing font-medium bg-transparent hover:bg-yellow-400/10 transition-colors"> <ChartBarIcon className="h-5 w-5 text-yellow-400" /> Estatísticas </a>
        </nav>
        <div className="px-4 py-6 border-t border-primary/10 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-zing">A</div>
          <div className="flex-1">
            <div className="text-sm text-white font-zing font-semibold">Administrador</div>
            <div className="text-xs text-primary font-zing">admin@allshop.com</div>
          </div>
          <button className="p-2 rounded-lg hover:bg-primary/10 transition-colors"> <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary" /> </button>
        </div>
      </aside>

      {/* Sidebar Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      <aside className={`fixed z-50 top-0 left-0 h-full w-64 bg-black/90 border-r border-primary/20 shadow-lg flex flex-col transition-transform duration-300 md:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center gap-3 px-8 py-6 border-b border-primary/10">
          <img src="/src/assets/logo.png" alt="AllShop Admin" className="h-10 w-10 rounded-full bg-primary/10 p-1" />
          <span className="text-xl font-zing font-bold text-primary">AllShop</span>
          <button className="ml-auto text-primary" onClick={() => setSidebarOpen(false)}><XMarkIcon className="h-7 w-7" /></button>
        </div>
        <nav className="flex-1 px-4 py-8 flex flex-col gap-2">
          <button onClick={() => { setActiveScreen('dashboard'); setSidebarOpen(false); }} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-zing font-medium transition-colors ${activeScreen === 'dashboard' ? 'bg-primary/10 text-primary' : 'text-white hover:bg-primary/10'}`}> <HomeIcon className="h-5 w-5 text-primary" /> Dashboard </button>
          <button onClick={() => { setActiveScreen('cadastro-produto'); setSidebarOpen(false); }} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-zing font-medium transition-colors ${activeScreen === 'cadastro-produto' ? 'bg-primary/10 text-primary' : 'text-white hover:bg-primary/10'}`}> <CubeIcon className="h-5 w-5 text-primary" /> Produtos </button>
          <button onClick={() => { setActiveScreen('cadastro-categoria'); setSidebarOpen(false); }} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-zing font-medium transition-colors ${activeScreen === 'cadastro-categoria' ? 'bg-primary/10 text-primary' : 'text-white hover:bg-primary/10'}`}> <TagIcon className="h-5 w-5 text-primary" /> Categorias </button>
          <a href="#pedidos" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white font-zing font-medium bg-transparent hover:bg-blue-500/10 transition-colors"> <ShoppingBagIcon className="h-5 w-5 text-blue-400" /> Pedidos </a>
          <a href="#usuarios" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white font-zing font-medium bg-transparent hover:bg-green-500/10 transition-colors"> <UsersIcon className="h-5 w-5 text-green-400" /> Usuários </a>
          <a href="#estatisticas" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white font-zing font-medium bg-transparent hover:bg-yellow-400/10 transition-colors"> <ChartBarIcon className="h-5 w-5 text-yellow-400" /> Estatísticas </a>
        </nav>
        <div className="px-4 py-6 border-t border-primary/10 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-zing">A</div>
          <div className="flex-1">
            <div className="text-sm text-white font-zing font-semibold">Administrador</div>
            <div className="text-xs text-primary font-zing">admin@allshop.com</div>
          </div>
          <button className="p-2 rounded-lg hover:bg-primary/10 transition-colors"> <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary" /> </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen w-full md:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-10 w-full bg-black/70 shadow-sm border-b border-primary/20 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <button className="md:hidden text-primary" onClick={() => setSidebarOpen(true)}><Bars3Icon className="h-7 w-7" /></button>
            <h1 className="text-2xl font-zing font-bold text-primary">Painel Administrativo</h1>
          </div>
        </header>
        {/* Main Area */}
        <main className="flex-1 flex flex-col w-full h-full min-h-0 overflow-y-auto overflow-x-hidden bg-black/30 p-0 sm:p-4">
          <div className="flex-1 flex flex-col w-full h-full">
            {activeScreen === 'dashboard' && (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <MockCharts />
              </div>
            )}
            {activeScreen === 'cadastro-produto' && <ProductRegistration onBack={() => setActiveScreen('dashboard')} />}
            {activeScreen === 'cadastro-categoria' && <CategoryRegistration onBack={() => setActiveScreen('dashboard')} />}
          </div>
        </main>
      </div>
    </div>
  );
} 