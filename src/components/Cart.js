import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
    const cart = useContext(CartContext);
    const cartTotal = cart.items.reduce((a, b) => a + b.price, 0);

    return (
        <div className="cart">
            <ul>
                {
                    cart && cart.items.map((item) => (
                        <li>
                            {item.name} - <b>Rs. {item.price}/-</b>
                        </li>
                    ))
                }
                <li><h2>Total Bill: Rs.{cartTotal}/-</h2></li>
            </ul>
        </div>
    )
}

export default Cart;