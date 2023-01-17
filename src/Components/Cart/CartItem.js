import { useDispatch } from "react-redux";
import dishesData from "../../data/dishesData";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const dishes = dishesData.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <span>{dishes.name}</span>
            <span> X {cartItem.quantity}</span>
            <p>Price: ${dishes.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt = 'Delete item'/> 
            </span>
        </div>
    )
}
export default CartItem;