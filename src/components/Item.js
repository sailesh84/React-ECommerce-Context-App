import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Item = (props) => {
    const cart = useContext(CartContext);
    console.log("cart", cart);

    return (
        <div className="item-card">
            <h4>{props.name}</h4>
            <p>Price: Rs. {props.price}/-</p>
            <button className="item-cart-button" onClick={() => { cart.setItems([...cart.items, { name: props.name, price: props.price }]) }}>Add to Cart</button>
            <hr></hr>
        </div>
    )
}

export default Item;