import { useSelector } from 'react-redux';
import dishesData from '../../data/dishesData';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import cartImg from './cart.png'
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const {id} = dishesData;
    return (
        <div key={id} className='container'>
            <img className='cart-img' src = {cartImg} alt = 'Cart'/>
            {cartItems.map(cartItem => <CartItem cartItem = {cartItem}/>)}
            <h3>TOTAL: ${totalPrice}</h3>
        </div>
    )
}
export default Cart;