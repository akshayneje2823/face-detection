import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/intro'
import ProductList from './components/product List/ProductList';

function App() {
  return (
    <div className="App">
      <Intro />
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
