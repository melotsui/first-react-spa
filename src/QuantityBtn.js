import React, { useState, useContext } from 'react'
import { CartContext } from './CartContext';

export default function QuantityBtn({ productInfo }) {

    const { cartItems, setCartItems } = useContext(CartContext);

    let productIndexInCart = cartItems.findIndex((element) => {
        return element.id === productInfo.id;
    })

    let [numInCart, setNumInCart] = useState(
        (productIndexInCart >= 0) ? cartItems[productIndexInCart].quantity : 0
    );

    const handleAdd = () => {
        if (productIndexInCart >= 0) {
            let newCartArray = [...cartItems];
            newCartArray[productIndexInCart].quantity++;
            setCartItems(newCartArray);
        } else {
            setCartItems(
                [
                    {
                        id : productInfo.id,
                        name : productInfo.name,
                        image : productInfo.image,
                        price : productInfo.price,
                        description : productInfo.description,
                        quantity : 1,
                    },
                    ...cartItems
                ]
            )
        }
        setNumInCart(++numInCart);
    }

    const handleSubtract = () => {
        if (cartItems[productIndexInCart].quantity === 1) {
            let newCartArray = [...cartItems];
            newCartArray.splice(productIndexInCart, 1);
            setCartItems(newCartArray);
        } else {
            let newCartArray = [...cartItems];
            newCartArray[productIndexInCart].quantity--;
            setCartItems(newCartArray);
        }
        setNumInCart(--numInCart);
    }

    return (
        <div className="addToCart">
            {
                numInCart > 0 ?
                    <div>
                        <span onClick={handleSubtract} className="subtractBtn">-</span>
                        {numInCart}件
                        <span onClick={handleAdd} className="addBtn">+</span>
                    </div> :
                    <div onClick={handleAdd} className="addToCartBtn">Add {productInfo.name} to cart</div>
            }
        </div>
    )
}
