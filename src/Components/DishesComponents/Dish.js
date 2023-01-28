import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    return (
        <div key={dish.id} className="container">
            <img src={`./${dish.img}.webp`} alt='{dish.name}'/>
            <h2>{dish.name}</h2>
            <h3>${dish.price}</h3>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="add-btn" onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>ADD</button>
        </div>
    )
}

export default Dish;