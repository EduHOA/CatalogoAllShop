import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

export default function AdminProducts() {
  const navigate = useNavigate();

  // --- ProductRegistration code ---
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
            <button type="button" onClick={() => navigate('/admin')} className="px-5 py-2 border border-primary/30 text-white rounded-lg hover:bg-primary hover:text-dark font-zing font-semibold transition-all duration-200 focus:ring-2 focus:ring-primary focus:outline-none" aria-label="Voltar">Voltar</button>
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