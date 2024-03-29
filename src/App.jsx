import { useContext } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/intro'
import ProductList from './components/product List/ProductList';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';

function App() {

  const them = useContext(ThemeContext);
  const darkMode = them.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
