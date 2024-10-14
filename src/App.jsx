import { NavBar } from './components/NavBar';
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
          <Route path="/react-products-school/products" element={<ProductList />} />
        </Routes>
      </StyledApp>
    </UserProvider>
  );
}

export default App;
