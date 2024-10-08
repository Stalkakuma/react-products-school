import { NavBar } from './components/NavBar';
import { ProductList } from './components/ProductList';
import { GlobalStyle, StyledApp } from './styes/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <NavBar />
        <ProductList />
      </StyledApp>
    </>
  );
}

export default App;
