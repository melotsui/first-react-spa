import React from 'react'
import logo from './React-icon.png'


export default function ProductList() {

    let productList = [
        {"id": 1, "name": "Apple", "price": 5, "image": "apple.jpg", "desc": "Apple 50g"},
        {"id": 2, "name": "Orange", "price": 3, "image": "orange.jpg", "desc": "Orange 50g"},
        {"id": 3, "name": "Mange", "price": 4, "image": "mange.jpg", "desc": "Mange 500g"},
        {"id": 4, "name": "Watermelon", "price": 20, "image": "watermelon.jpg", "desc": "Watermelon 2kg"},
        {"id": 5, "name": "Blueberry", "price": 10, "image": "blueberry.jpg", "desc": "Blueberry 50g"}
    ];

    return (
        <div>
            <h1>Please select the product</h1>
            <div>
                {
                    productList.map((product)=>{
                        return (
                            <div key={product.id}>
                                {product.name}<br/>
                                {product.price}<br/>
                                <img src={process.env.PUBLIC_URL + '/img/'+product.image} width='100' /><br/>
                                {product.desc}<br/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
