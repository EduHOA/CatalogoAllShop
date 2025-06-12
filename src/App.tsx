import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeScreen from './screens/Home';
import ProductsScreen from './screens/Products';
import CategoriesScreen from './screens/Categories';
import AdminLogin from './screens/AdminLogin';
import AdminDashboard from './screens/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginadm" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
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
