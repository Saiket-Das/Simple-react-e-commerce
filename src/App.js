import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Shop></Shop> */}

      {/* Router  */}
      <Routes>
        <Route path="/" element={<Shop></Shop>} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="/order" element={<Order></Order>} />
        <Route path="/inventory" element={<Inventory></Inventory>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

    </div>
  );
}

export default App;
