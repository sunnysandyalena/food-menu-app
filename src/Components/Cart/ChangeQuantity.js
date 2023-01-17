const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = ()=> {
        const newQuantity = quantity +1;
        setQuantity(newQuantity)
    }
    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity)
    }
    return (
        <div className="quantity-selector">
            <div>
                <button className="selector-btn" onClick={addQuantity}>+</button>
            </div>
            <div>
                <p>{quantity}</p>
            </div>
            <div>
                <button className="selector-btn" onClick={removeQuantity}>-</button>
            </div>
        </div>
    )

}

export default ChangeQuantity;