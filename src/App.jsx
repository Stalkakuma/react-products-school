import { NavBar } from './components/NavBar';
import { ProductList } from './components/ProductList';
import { UserProvider } from './store/UserContext';
import { GlobalStyle, StyledApp } from './styes/GlobalStyles';

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <StyledApp>
        <NavBar />
        <ProductList />
      </StyledApp>
    </UserProvider>
  );
}

export default App;
