import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import QuantityBtn from './QuantityBtn';
import Title from './Title'

export default function Checkout() {

    const { cartItems, setCartItems } = useContext(CartContext);
    let grandTotal = cartItems.reduce((total, product) => {
        return total += product.price * product.quantity;
    }, 0);
    const freeShippingPrice = 99;

    return (
        <>
            <Title mainTitle={"Your Shopping Cart"}></Title>
            {
                cartItems.length <= 0 &&
                <div>
                    <div className="nothingInCart">購物車現在沒有商品<br/><br/>
                    <Link to="/">去產品頁看看吧</Link></div> :
                </div>
            }
            {
                cartItems.length > 0 &&
                <div className="container">
                    <div id="cartSection">
                        <table className="checkoutTable">
                            <tbody>
                                {
                                    cartItems.map(product => (
                                        <tr key={product.id}>
                                            <td><Link to={'/product/product.id'} ><img src={process.env.PUBLIC_URL + '/img/' + product.image} width='100'></img></Link></td>
                                            <td>
                                                <p>名稱 : {product.name}</p>
                                                <p>售價 : {product.price}元</p>
                                                <p>描述 : {product.description}</p>
                                            </td>
                                            <td width="200">
                                                <QuantityBtn productInfo={product} />
                                            </td>
                                            <td>
                                                <div className="productSubTotal">
                                                    ${product.price*product.quantity}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }</tbody>
                        </table>
                    </div>
                    <div className="checkoutSection">
                        <div>全部貨品總共</div>
                        <div className="grandTotal">{grandTotal}元</div>
                        {
                            grandTotal >= freeShippingPrice ? 
                            <div className="freeShipping">✔️我們免費送貨</div> :
                            <div className="noShipping">滿${freeShippingPrice}免費送貨<br/>還差${freeShippingPrice-grandTotal}</div>
                        }
                        
                        <button>結帳付款</button>
                    </div>
                </div>
            }
        </>
    )
}
