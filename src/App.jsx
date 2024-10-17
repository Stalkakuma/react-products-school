import { Dashboard } from './components/Dashboard/Dashboard';
import { Login } from './components/Login/Login';
import { NavBar } from './components/NavBar';
import ProductCreate from './components/ProductCreate/ProductCreate';
import ProductDetailed from './components/ProductDetailed/ProductDetailed';
import { ProductList } from './components/ProductList';
import { UserProvider } from './store/UserContext';
import { GlobalStyle, StyledApp } from './styes/GlobalStyles';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <NavBar />
      <StyledApp>
        <Routes>
          <Route path="/react-products-school/" element={<Dashboard />} />
          <Route path="/react-products-school/products" element={<ProductList />} />
          <Route path="/react-products-school/products/:id" element={<ProductDetailed />} />
          <Route path="/react-products-school/user" element={<Login />} />
          <Route path="/react-products-school/product-form" element={<ProductCreate />} />
        </Routes>
      </StyledApp>
    </UserProvider>
  );
}

export default App;
