import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          <Hero />
          <FeaturedProducts />
        </main>
        <footer className="bg-black mt-16 rounded-t-3xl">
          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-base text-white">
                &copy; 2024 AllShop. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
