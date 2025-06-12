import type { ReactNode } from 'react';
import Navbar from '../Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          {children}
        </main>
        <footer className="bg-black mt-16 rounded-t-3xl">
          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-base text-white">
                &copy; 2024 AllShop. Todos os direitos reservados.
              </p>
              <a 
                href="/loginadm"
                className="mt-4 inline-block text-[8px] text-gray-400 hover:text-primary/50 transition-colors duration-300"
              >
                Admin
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 