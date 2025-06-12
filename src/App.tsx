import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeScreen from './screens/Home';
import ProductsScreen from './screens/Products';
import CategoriesScreen from './screens/Categories';
import AdminLogin from './screens/AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginadm" element={<AdminLogin />} />
        <Route
          path="/"
          element={
            <Layout>
              <Routes>
                <Route index element={<HomeScreen />} />
                <Route path="produtos" element={<ProductsScreen />} />
                <Route path="categorias" element={<CategoriesScreen />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
