import { ChartBarIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function AdminDashboardHome() {
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