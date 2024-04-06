import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductStore from './views/Store';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<ProductStore />} />
        {/* <Route path='/products/:id' element={<ProductDetail />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
