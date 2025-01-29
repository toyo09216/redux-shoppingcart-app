import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/Modal';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
