// Font
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import { Home } from './component/Home';
import Footer from './component/Footer/Footer';
import ProductPage from './component/Product_Page/ProductPage';
import About from './component/About/About';
import Connect from './component/Connect/Connect';
import Chat from './component/Chat/Chat';



function App() {
  return (
    <div>
    <Router>
      <Header />
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/contact' element={<Connect />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Chat />
      <Footer />
    </Router>
    
    </div>
  );
}

export default App;
