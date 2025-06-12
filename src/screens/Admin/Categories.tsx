import { useNavigate } from 'react-router-dom';

export default function AdminCategories() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full min-h-[80vh] grid place-items-center py-8 bg-gradient-to-br from-dark via-black to-primary/20 animate-gradient-x">
      <div className="w-full glass-card relative border border-primary/30 shadow-2xl p-4 sm:p-8 transition-all duration-300 hover:shadow-primary/30 focus-within:ring-2 focus-within:ring-primary outline-none cursor-pointer overflow-hidden max-w-2xl">
        <div className="absolute inset-0 pointer-events-none border-2 border-transparent focus-within:border-primary rounded-2xl transition-all duration-300 animate-border-glow" />
        <h2 className="text-3xl font-zing font-extrabold text-primary mb-2 text-center drop-shadow flex items-center justify-center gap-2">
          Cadastro de Categoria
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
            <button type="button" onClick={() => navigate('/admin')} className="px-5 py-2 border border-primary/30 text-white rounded-lg hover:bg-primary hover:text-dark font-zing font-semibold transition-all duration-200 focus:ring-2 focus:ring-primary focus:outline-none" aria-label="Voltar">Voltar</button>
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