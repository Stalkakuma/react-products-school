import { Dashboard } from './components/Dashboard/Dashboard';
import { Login } from './components/Login/Login';
import { NavBar } from './components/NavBar';
import { ProductDetailed } from './components/ProductDetailed/ProductDetailed';
import { ProductList } from './components/ProductList';
import { UserProvider } from './store/UserContext';
import { GlobalStyle, StyledApp } from './styes/GlobalStyles';
import { Route, Routes, useParams } from 'react-router-dom';

function App() {
  const { id } = useParams();
  console.log(id);
  return (
    <UserProvider>
      <GlobalStyle />
      <NavBar />
      <StyledApp>
        <Routes>
          <Route path="/react-products-school/" element={<Dashboard />} />
          <Route path="/react-products-school/products" element={<ProductList />}>
            <Route path=":id" element={<ProductDetailed />} />
          </Route>
          <Route path="/react-products-school/user" element={<Login />} />
        </Routes>
      </StyledApp>
    </UserProvider>
  );
}

export default App;
